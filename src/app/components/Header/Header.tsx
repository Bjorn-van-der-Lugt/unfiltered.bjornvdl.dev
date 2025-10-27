'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import ModeToggle from '../ModeToggle/ModeToggle';

export default function HeaderNav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const studio = pathname?.startsWith('/studio');
  const handleMenuToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

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
          className={`${styles.header} ${isNavOpen ? styles.isOpen : ''} ${studio ? styles.studio : '' }`}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.list}>
                <Link href="/#landing" className={styles.link}>Home</Link>
              </li>
              <li className={styles.list}>
                <Link href="/blog" className={styles.link}>Blog</Link>
              </li>
              <li className={styles.list}>
                <Link href="/#landing" className={styles.link}>About</Link>
              </li>
              <li className={styles.list}>
                <Link href="/#contact" className={styles.link}><i className="fa-sharp-duotone fa-solid fa-phone"></i> Contact</Link>
              </li>
              <li className={styles.list}>
                <a href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC"
                  className={styles.link}
                  rel="noopener noreferrer"
                  target="_blank">Donate
                </a>
              </li>
              <li className={styles.list}><ModeToggle/></li>
            </ul>
          </nav>
        </header>
    </>
  );
}