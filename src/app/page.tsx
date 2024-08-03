import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

export default function Page() {
  return (
    <main className="flex-1 grid justify-center max-w-screen-xl gap-10 p-4 md:p-8 mx-auto">
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
          {
            title: "The Rise of Serverless Computing",
            author: "Michael Johnson",
            date: "June 1, 2023",
            content:
              "Serverless computing is transforming the way we build and deploy web applications. In this article, we examine the benefits of serverless, including scalability, cost optimization, and developer productivity. Discover how serverless platforms like AWS Lambda and Google Cloud Functions are empowering developers to focus on their application logic rather than infrastructure management.",
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
    </main>
  );
}
