"use client"

import React, { useEffect, useState } from "react";
import styles from './ContactMethods.module.scss'

export default function ContactMethods() {
  const [emailText, setEmailText] = useState("");
  const [emailHref, setEmailHref] = useState("");
  const [waHref, setWaHref] = useState("");
  const [igHref, setIgHref] = useState("");
  const [liHref, setLiHref] = useState("");
  const [siteHref, setSiteHref] = useState("");

  useEffect(() => {
    const s = (...parts: (string | number[])[]) =>
      parts
        .map((p) => (Array.isArray(p) ? String.fromCharCode(...p) : String(p)))
        .join("");

    // Email
    const user = s([98, 106, 111, 114, 110], ".", [118, 100], ".", [108, 117, 103, 116]); // bjorn.vd.lugt
    const domain = s([111, 117, 116, 108, 111, 111, 107], ".", "com"); // outlook.com
    const email = `${user}@${domain}`;

    // Phone / WhatsApp
    const phoneDigits = s("31", "681195664"); // 31681195664

    // Socials
    const instagram = s("htt", "ps://www.instagram.com/", "bjornvdlugt", "/");
    const linkedin = s("htt", "ps://www.linkedin.com/in/", "bjorn-van-der-lugt-136b7731a", "/");
    const site = s("htt", "ps://", "bjornvdl", ".", "dev");

    setEmailText(email);
    setEmailHref(`mailto:${email}`);
    setWaHref(`https://wa.me/${phoneDigits}`);
    setIgHref(instagram);
    setLiHref(linkedin);
    setSiteHref(site);
  }, []);

  return (
    <ul data-nosnippet className={styles.ul}>
      {/* Instagram */}
      <li className={styles.list}>
        <i className="fa-brands fa-square-instagram" aria-hidden="true" />{" "}
        <a
          href={igHref || "#"}
          onMouseDown={(e) => !igHref && e.preventDefault()}
          target="_blank"
          rel="nofollow noopener noreferrer me"
          className={styles.link}
        >
          Instagram
        </a>
      </li>

      {/* LinkedIn */}
      <li className={styles.list}>
        <i className="fa-brands fa-linkedin" aria-hidden="true" />{" "}
        <a
          href={liHref || "#"}
          onMouseDown={(e) => !liHref && e.preventDefault()}
          target="_blank"
          rel="nofollow noopener noreferrer me"
          className={styles.link}
        >
          LinkedIn
        </a>
      </li>

      {/* Email */}
      <li className={styles.list}>
        <i className="fa-sharp-duotone fa-solid fa-envelope" aria-hidden="true" />{" "}
        <a
          href={emailHref || "#"}
          onMouseDown={(e) => !emailHref && e.preventDefault()}
          rel="nofollow noopener noreferrer"
          className={styles.link}
        >
          <span suppressHydrationWarning>{emailText || "Email"}</span>
        </a>
      </li>

      {/* WhatsApp */}
      <li className={styles.list}>
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />{" "}
        <a
          href={waHref || "#"}
          onMouseDown={(e) => !waHref && e.preventDefault()}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={styles.link}
        >
          WhatsApp
        </a>
      </li>

      {/* Portfolio site */}
      <li className={styles.list}>
        <i className="fa-sharp-duotone fa-solid fa-paper-plane" aria-hidden="true" />{" "}
        <a
          href={siteHref || "#"}
          onMouseDown={(e) => !siteHref && e.preventDefault()}
          target="_blank"
          rel="nofollow noopener noreferrer me"
          className={styles.link}
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}