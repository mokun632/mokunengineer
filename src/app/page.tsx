import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const ArticleCard = ({
  title,
  author,
  date,
  content,
}: {
  title: string;
  author: string;
  date: string;
  content: string;
}) => (
  <article>
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div>{author}</div>
          <Separator orientation="vertical" />
          <div>{date}</div>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  </article>
);

const CategoryList = () => (
  <Card className="border-none shadow-none">
    <CardHeader className="pt-0">
      <CardTitle>Categories</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Web Development
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          React
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Serverless
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Performance
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Accessibility
        </Link>
      </div>
    </CardContent>
  </Card>
);

const PopularPostList = () => (
  <Card className="border-none shadow-none">
    <CardHeader className="pt-0">
      <CardTitle>Popular Posts</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-sm hover:underline"
          prefetch={false}
        >
          <div className="flex-shrink-0 w-16 h-12 bg-muted rounded-md" />
          <div>The Future of Web Development</div>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-sm hover:underline"
          prefetch={false}
        >
          <div className="flex-shrink-0 w-16 h-12 bg-muted rounded-md" />
          <div>Mastering React Hooks</div>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-sm hover:underline"
          prefetch={false}
        >
          <div className="flex-shrink-0 w-16 h-12 bg-muted rounded-md" />
          <div>The Rise of Serverless Computing</div>
        </Link>
      </div>
    </CardContent>
  </Card>
);

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 p-4 md:p-8">
        <div className="space-y-8">
          {[
            {
              title: "The Future of Web Development",
              author: "John Doe",
              date: "April 15, 2023",
              content:
                "In this article, we explore the latest trends and technologies shaping the future of web development. From the rise of serverless architectures to the increasing importance of accessibility and performance, we dive into the key advancements that will define the next generation of web applications.",
            },
            {
              title: "Mastering React Hooks",
              author: "Jane Smith",
              date: "May 1, 2023",
              content: "Lorem ipsum",
            },
            {
              title: "The Rise of Serverless Computing",
              author: "Michael Johnson",
              date: "June 1, 2023",
              content:
                "Serverless computing is transforming the way we build and deploy web applications. In this article, we examine the benefits of serverless, including scalability, cost optimization, and developer productivity. Discover how serverless platforms like AWS Lambda and Google Cloud Functions are empowering developers to focus on their application logic rather than infrastructure management.",
            },
          ].map(({ title, author, date, content }) => (
            <ArticleCard
              key={title}
              title={title}
              author={author}
              date={date}
              content={content}
            />
          ))}
        </div>
        <div className="space-y-5">
          <CategoryList />
          <PopularPostList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
