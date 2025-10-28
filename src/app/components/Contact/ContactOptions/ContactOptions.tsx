import styles from './ContactOptions.module.scss';

export default function ContactOptions() {
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <a href="mailto:bjorn.vd.lugt@outlook.com" className={styles.link} aria-label="Email">
            <i className="fa-sharp-duotone fa-solid fa-envelope" aria-hidden="true"></i>
            Email
          </a>
        </li>

        <li className={styles.list}>
          <a
            href="https://linkedin.com/in/bjorn-van-der-lugt-136b7731a"
            className={styles.link}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            LinkedIn
          </a>
        </li>

        <li className={styles.list}>
          <a href="tel:+31681195664" className={styles.link} aria-label="Mobile">
            <i className="fa-duotone fa-solid fa-mobile" aria-hidden="true"></i>
            Mobile
          </a>
        </li>

        <li className={styles.list}>
          <a
            href="https://wa.me/31681195664"
            className={styles.link}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            WhatsApp
          </a>
        </li>

        <li className={styles.list}>
          <a
            href="https://www.instagram.com/bjornvdlugt/"
            className={styles.link}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            Instagram
          </a>
        </li>
      </ul>

      <div className={styles.grid}>
        <div className={`${styles.item} ${styles.email}`}>
          <strong>Email:</strong> bjorn.vd.lugt@outlook.com
        </div>
        <div className={`${styles.item} ${styles.mobile}`}>
          <strong>Mobile:</strong> +31 6 81195664
        </div>
        <div className={styles.item}>
          <strong>Chamber of Commerce:</strong> 97587850
        </div>
        <div className={styles.item}>
          <strong>VAT ID:</strong> NL005281002B85
        </div>
        <div className={styles.item}>
          <strong>
            <i className="fa-sharp-duotone fa-solid fa-envelope" aria-hidden="true"></i>
          </strong>{' '}
          Pekelderstraat 8, 9673 BK Winschoten, NL
        </div>

        <div className={styles.item}>
          <strong>Services:</strong>{' '}
          <a
            href="https://bjornvdl.dev"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Development
          </a>
        </div>
      </div>
    </>
  );
}