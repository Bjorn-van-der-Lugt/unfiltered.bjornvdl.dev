/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import ModeToggle from '@/app/components/Header/ModeToggle/ModeToggle';

export default function HeaderNav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const studio = pathname?.startsWith('/studio');
  const headerRef = useRef<HTMLElement | null>(null);

  const handleMenuToggle = () => setIsNavOpen((prev) => !prev);

  useEffect(() => {
    const body = document.querySelector<HTMLElement>('body');
    if (isNavOpen && body) {
      body.style.overflow = 'hidden';
      body.classList.add('menuOpen');
    } else if (body) {
      body.style.overflow = '';
      body.classList.remove('menuOpen');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menuOpen');
    };
  }, [isNavOpen]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('header');
    const main = document.querySelector<HTMLElement>('main');
    const footer = document.querySelector<HTMLElement>('footer');

    const handleResize = () => {
      if (header) header.classList.add(styles.noTransition);
      if (footer) footer.classList.add('noTransition');
      if (main) main.classList.add('noTransition');

      setTimeout(() => {
        if (header) header.classList.remove(styles.noTransition);
        if (footer) footer.classList.remove('noTransition');
        if (main) main.classList.remove('noTransition');
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function waitForHeaderCloseThen(run: () => void) {
    const headerEl = headerRef.current;
    if (!headerEl) {
      requestAnimationFrame(run);
      return;
    }

    const onEnd = (e: TransitionEvent) => {
      if (e.target !== headerEl) return;
      headerEl.removeEventListener('transitionend', onEnd as any);
      run();
    };
    headerEl.addEventListener('transitionend', onEnd as any, { once: true } as any);

    const cs = window.getComputedStyle(headerEl);
    const durs = (cs.transitionDuration || '0s').split(',').map((d) => parseFloat(d) || 0);
    const delays = (cs.transitionDelay || '0s').split(',').map((d) => parseFloat(d) || 0);
    const maxSec = Math.max(...durs.map((d, i) => d + (delays[i] || 0)), 0);
    if (maxSec === 0) requestAnimationFrame(run);
  }

  function scrollAfterClose(hash: string, waitForClose: boolean) {
    const doScroll = () => {
      const sel = hash.startsWith('#') ? hash : `#${hash.replace(/^\/?#/, '')}`;
      document.querySelector<HTMLElement>(sel)?.scrollIntoView();
    };
    if (!waitForClose) {
      requestAnimationFrame(doScroll);
      return;
    }
    waitForHeaderCloseThen(doScroll);
  }

  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const href = (e.currentTarget.getAttribute('href') || '').trim();
    if (!href) return;

    const hasHash = href.includes('#');
    const basePath = href.split('#')[0];
    const isSamePageRoot = (basePath === '/' || basePath === '') && pathname === '/';

    if (hasHash && isSamePageRoot) {
      e.preventDefault();
      const wasOpen = isNavOpen;
      if (wasOpen) setIsNavOpen(false);
      const hash = href.slice(href.indexOf('#'));
      scrollAfterClose(hash, wasOpen);
      return;
    }

    if (isNavOpen) {
      e.preventDefault();
      setIsNavOpen(false);
      waitForHeaderCloseThen(() => router.push(href));
      return;
    }
  };

  return (
    <>
      <button
        className={`${styles.MenuToggle} ${isNavOpen ? styles.isOpen : ''}`}
        onClick={handleMenuToggle}
        aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <i className={`fa-sharp-duotone fa-solid fa-bars ${styles.bars}`} aria-hidden="true"></i>
      </button>
      <header
        ref={headerRef}
        className={`${styles.header} ${isNavOpen ? styles.isOpen : ''} ${studio ? styles.studio : '' }`}
      >
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.list}>
              <Link href="/#landing" className={styles.link} onClick={handleLinkClick}>Home</Link>
            </li>
            <li className={styles.list}>
              <Link href="/#blog" className={styles.link} onClick={handleLinkClick}>Blog</Link>
            </li>
            <li className={styles.list}>
              <Link href="/#landing" className={styles.link} onClick={handleLinkClick}>About</Link>
            </li>
            <li className={styles.list}>
              <Link href="/#contact" className={styles.link} onClick={handleLinkClick}>Services</Link>
            </li>
            <li className={styles.list}>
              <Link href="/#contact" className={styles.link} onClick={handleLinkClick}>Contact</Link>
            </li>
            <li className={styles.list}>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC"
                className={styles.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Donate
              </a>
            </li>
            <li className={styles.list}><ModeToggle/></li>
          </ul>
        </nav>
      </header>
    </>
  );
}