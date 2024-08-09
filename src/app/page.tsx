import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import fs from "fs";
import Link from "next/link";

const ArticleLink = ({
  href,
  title,
  author,
  date,
  content,
}: {
  href: string;
  title: string;
  author: string;
  date: string;
  content: string;
}) => (
  <Link href={href}>
    <article>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <div>{date}</div>
          </div>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </article>
  </Link>
);

export default function Page() {
  const files = fs
    .readdirSync(`${process.cwd()}/src/app/contents`)
    .filter((file) => !file.startsWith("_") && !file.endsWith(".tsx"));

  return (
    <main className="flex-1 grid justify-center max-w-screen-xl gap-10 p-4 md:p-8 mx-auto">
      <div className="space-y-8">
        {[
          {
            href: "/article/1",
            title: "The Future of Web Development",
            author: "John Doe",
            date: "April 15, 2023",
            content:
              "In this article, we explore the latest trends and technologies shaping the future of web development. From the rise of serverless architectures to the increasing importance of accessibility and performance, we dive into the key advancements that will define the next generation of web applications.",
          },
        ].map(({ title, author, date, content }, i) => (
          <ArticleLink
            href={`/contents/${files[i]}`}
            key={title}
            title={title}
            author={author}
            date={date}
            content={content}
          />
        ))}
      </div>
    </main>
  );
}
