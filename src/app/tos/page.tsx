import Link from "next/link";
import styles from './tos.module.scss';

export default function ToS() {
    return (
        <div className={styles.pageContainer}>
            <article className={styles.article}>
                <section className={styles.section}>
                    <h1 className={styles.heading}>Terms of Service</h1>
                    <p><em>Effective: 2025-09-30</em></p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>1. Intellectual Property</h2>
                    <p className={styles.text}>
                        All content on this website is the exclusive property of Ólé Paellas. 
                        Unauthorized reproduction, distribution, or commercial use is prohibited without express written permission.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>2. Prohibited Conduct</h2>
                    <ul className={styles.ul}>
                        <li className={styles.list}>Posting unlawful, abusive, or harmful content</li>
                        <li className={styles.list}>Engaging in spamming, phishing, or malware distribution</li>
                        <li className={styles.list}>Unauthorized access attempts or system disruption</li>
                        <li className={styles.list}>Reverse engineering or automated data collection</li>
                    </ul>
                    <p className={styles.text}>
                        Violations may result in immediate access termination.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>3. Data Practices</h2>
                    <p className={styles.text}>
                        See the <Link href='/privacy-policy' className={styles.link}>Privacy Policy</Link> for details on information handling.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>4. Liability</h2>
                    <p className={styles.text}>
                        This service is provided &quot;as is&quot; without warranties of any kind. I expressly disclaim responsibility for:
                    </p>
                    <ul className={styles.ul}>
                        <li className={styles.list}>Service interruptions or errors</li>
                        <li className={styles.list}>Security breaches or data loss</li>
                        <li className={styles.list}>Damages arising from website use</li>
                    </ul>
                    <p className={styles.text}>
                        All usage risks are solely yours.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>5. Modifications</h2>
                    <p className={styles.text}>
                        Terms may be updated without notice. Continued use constitutes acceptance.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>6. Jurisdiction</h2>
                    <p className={styles.text}>
                        Disputes will be resolved under Dutch law, through Netherlands courts or binding arbitration at my discretion.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>7. Contact</h2>
                    <p className={styles.text}>
                        Direct inquiries via the <Link href='/#contact' className={styles.link}>contact section</Link>.
                    </p>
                </section>

                <section className={styles.section}>
                    <p className={styles.text}>
                        <strong>Using this site constitutes agreement to these terms.</strong>
                    </p>
                </section>
            </article>
        </div>
    )
}