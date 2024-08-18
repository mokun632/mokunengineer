import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getBlogPosts } from "./blog/utils";

const ArticleLink = ({
  href,
  title,
  publishedAt,
  description,
}: {
  href: string;
  title: string;
  publishedAt: string;
  description: string;
}) => (
  <Link href={href} className="block w-full">
    <article>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <div>{publishedAt}</div>
          </div>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </article>
  </Link>
);

export default function Page() {
  const allBlogs = getBlogPosts();

  return (
    <main className="flex-1 grid justify-center max-w-screen-xl gap-10 p-4 md:p-8 mx-auto">
      <div className="space-y-8">
        {allBlogs
          .sort((a, b) =>
            new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
              ? 1
              : -1
          )
          .map((blog) => (
            <ArticleLink
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              title={blog.metadata.title}
              publishedAt={blog.metadata.publishedAt}
              description={blog.metadata.description}
            />
          ))}
      </div>
    </main>
  );
}
