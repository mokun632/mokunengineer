import { notFound } from "next/navigation";
import { baseUrl, getBlogPosts } from "../utils";
import { CustomMDX } from "@/components/mdx";

export const generateStaticParams = async () => {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt, description, image } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <CustomMDX source={post.content} />;
}
