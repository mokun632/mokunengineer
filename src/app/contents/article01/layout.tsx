import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example MDX Article",
  description: "Example MDX Article",
};

export default function Article01Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
