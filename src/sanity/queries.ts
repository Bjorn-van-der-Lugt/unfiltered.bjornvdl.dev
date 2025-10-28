export const POSTS_QUERY = `
*[_type=="post"] | order(publishedAt desc)[0...20]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author-> { name }
}
`;

export const POST_BY_SLUG_QUERY = `
*[_type=="post" && slug.current==$slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  body,
  author-> { name }
}
`;