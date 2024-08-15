import type { Metadata } from "next";
import { ContentInfoType } from "../_lib/contents-info";

export const metadata: Metadata = {
  title: "なぜ、useはPromiseのキャッシュ判定ができるのか",
  description:
    "なぜ、Promiseのキャッシュ判定ができるのか。Reactの内部コードを追いながら、見ていきます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
