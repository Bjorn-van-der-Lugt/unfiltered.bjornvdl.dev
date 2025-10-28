import Link from "next/link";
import styles from "./Footer.module.scss"; 

export default function Footer() {
    return (
        <footer className={styles.footer}>
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
                        <Link href="/#contact" className={styles.link}> Services</Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/#contact" className={styles.link}> Contact</Link>
                    </li>
                    <li className={styles.list}>
                        <a href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC"
                        className={styles.link}
                        rel="noopener noreferrer"
                        target="_blank">Donate
                        </a>
                    </li>
                    <li className={styles.list}>
                        <Link href="/privacy-policy" className={styles.link}>
                            Privacy-Policy
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link href="/tos" className={styles.link}>
                            ToS
                        </Link>
                    </li>
                    <li className={styles.list}>
                        <Link 
                            className={styles.link} 
                            href="https://bjornvdl.dev" 
                            rel="noopener noreferrer"
                        >
                            © <span className={styles.author}> Björn van der Lugt</span>
                        </Link> — All rights reserved
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
