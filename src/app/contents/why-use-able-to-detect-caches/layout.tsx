import type { Metadata } from "next";
import { ContentInfoType } from "../_lib/contents-info";

export const contentInfo: ContentInfoType = {
  pathName: "why-use-able-to-detect-caches",
  title: "なぜ、useはPromiseのキャッシュ判定ができるのか",
  date: "2024-08-11",
  content:
    "useは無限ループが起きてしまうので、渡されたPromiseがレンダリング間で変更されたか検知する事ができます。どうやって検知しているかを内部のコードを追いながら、見ていきます。",
};

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
