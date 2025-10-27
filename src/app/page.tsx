import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import ContactMethods from "./components/ContactMethods/ContactMethods";

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="landing" className={`${styles.landing} ${styles.section}`}>
        <div className={styles.overlay}>
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>Everything UgaBuga</h1>
            <p className={styles.text}>Unfiltered perspectives on everything you don't wish to think about</p>
            <a className={styles.cta} href="#home">Start Reading </a>
          </div>
          <div id="home" className={styles.home}></div>
        </div>
      </div>
      <div id="contact" className={`${styles.contact} ${styles.section}`}>
        <h2 className={styles.heading}>Reach out</h2>
        <p className={styles.text}>
          I’m a Web Developer and Business Consultant helping solopreneurs and small businesses build digital solutions that convert clients and customers.
          But I'm open to way more than just web dev work. I'm passionate about weightlifting, martial arts, psychology, 
          art, tattoos, piercings and plenty of other weird shit.
          Always down for business opportunities, creative collaborations, or just connecting with interesting people relatively nearby. 
        </p>
        <ContactMethods/>
        <iframe className={styles.map} width="100%" height="450" loading="lazy" src="https://maps.google.com/maps?q=51.60,5.20&z=4&output=embed"></iframe>
      </div>
    </div>
  );
}
