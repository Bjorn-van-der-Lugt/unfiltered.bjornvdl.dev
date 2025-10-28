/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import styles from "./page.module.scss";
import ContactOptions from "./components/Contact/ContactOptions/ContactOptions";
import BaseMap from "./components/Contact/BaseMap/BaseMap";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/urlFor";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <div className={styles.pageContainer}>
      <section id="landing" className={`${styles.landing} ${styles.section}`}>
        <h1 className={styles.heading}>Unfiltered Perspective</h1>
        <p className={styles.text}>
          Unfiltered Perspective on the Human Condition — A descent into the bedrock of our species, leaving behind moral absolutism and observing through a lens of pragmatism
        </p>
      </section>

      <section id="blog" className={`${styles.blog} ${styles.section}`}>
        <ul className={styles.ul}>
          {posts?.map((post: any) => (
            <li key={post._id} className={styles.list}>
              <h3 className={styles.heading}>{post.title}</h3>
                <p className={styles.text}>{post.excerpt}</p>
                <p>{post.author?.name}: {post.publishedAt?.slice(0, 10)}</p>
              <Link href={`${post.slug}`}>
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).width(800).height(450).url()}
                    alt={post.title}
                    width={800}
                    height={450}
                    className={styles.image}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className={`${styles.contact} ${styles.section}`}>
        <h2 className={styles.heading}>Reach out <i className="fa-sharp-duotone fa-solid fa-paper-plane"></i></h2>
        <p className={styles.text}>
          I’m a Web Developer and Business Consultant helping freelancers and small businesses build digital solutions that convert clients and customers. 
          But I’m always open to new business opportunities of any kind, creative collaborations, or just connecting with interesting people nearby.
        </p>
        <ContactOptions />
        <h3 className={styles.heading}>Rooted in the Netherlands, Working Worldwide</h3>
        <p className={styles.text}>
          <strong>Bases:</strong> Bergen op Zoom (NL) [ main ] | near Rzeszów (PL) [ secondary ]
        </p>
        <BaseMap />
      </section>
    </div>
  );
}