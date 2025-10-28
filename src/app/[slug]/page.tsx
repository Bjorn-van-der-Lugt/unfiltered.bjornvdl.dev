import { sanityFetch } from "@/sanity/lib/live";
import { POST_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/urlFor";
import Image from "next/image";
import styles from "./page.module.scss";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import ContactOptions from "../components/Contact/ContactOptions/ContactOptions";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://unfilterd.bjornvdl.dev";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }

  const title = post.title;
  const description = post.excerpt || "An essay on the human condition.";
  const url = `${SITE_URL}/` + slug;

  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : `${SITE_URL}/og-default.jpg`; 

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      authors: post.author?.name ? [post.author.name] : undefined,
      publishedTime: post.publishedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(1200).url()}
        alt={value.alt || "Post image"}
        width={1200}
        height={600}
        className={styles.image}
      />
    ),
  },
  block: {
    h2: ({ children }) => <h2 className={styles.heading}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading}>{children}</h3>,
    normal: ({ children }) => <p className={styles.text}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className={styles.quote}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    number: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.list}>{children}</li>,
    number: ({ children }) => <li className={styles.list}>{children}</li>,
  },
};

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props): Promise<React.ReactElement> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!post) {
    return <div className={styles.notFound}>Post not found.</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.section}>
        <article>
          <PortableText value={post.body} components={components} />
          <ContactOptions/>
        </article>
      </section>
    </div>
  );
}