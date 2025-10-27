import Link from 'next/link';
import styles from './privacy-policy.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.text}><strong>Effective: 2025-09-30</strong></p>
        <p className={styles.text}>
          This policy describes how visitor information is handled on this website. 
          By using this site, you accept these terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Data Collection</h2>
        <p className={styles.text}>
          No personal data is collected automatically. Information you voluntarily share via email, LinkedIn, 
          or other direct contact is used only to respond and is not stored or shared.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Analytics</h2>
        <p className={styles.text}>
          The site uses Cloudflare and Vercel Analytics to collect anonymous traffic data. 
          These systems cannot identify individual visitors.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Security</h2>
        <p className={styles.text}>
          Standard security measures are in place, though no website can guarantee complete protection.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Your Rights</h2>
        <p className={styles.text}>
          For questions about data handling, use the 
          <Link href="/#contact" className={styles.link}> contact section</Link>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Changes</h2>
        <p className={styles.text}>
          Updates will be marked by a new effective date.
        </p>
      </section>
    </div>
  );
}