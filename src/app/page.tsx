import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import fs from "fs";
import Link from "next/link";

const ArticleLink = ({
  href,
  title,
  date,
  content,
}: {
  href: string;
  title: string;
  date: string;
  content: string;
}) => (
  <Link href={href} className="block w-full">
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

const CONTENT_DIRECTORY = `${process.cwd()}/src/app/contents/`;

export default function Page() {
  const pathNames = fs
    .readdirSync(CONTENT_DIRECTORY)
    .filter((file) => !file.startsWith("_") && !file.endsWith(".tsx"));

  return (
    <main className="flex-1 grid justify-center max-w-screen-xl gap-10 p-4 md:p-8 mx-auto">
      <div className="space-y-8">
        {[].map(({ title, date, content }, i) => (
          <ArticleLink
            href={`/contents/${pathNames[i]}`}
            key={title}
            title={title}
            date={date}
            content={content}
          />
        ))}
      </div>
    </main>
  );
}
