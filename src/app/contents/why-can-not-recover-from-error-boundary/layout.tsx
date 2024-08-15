import type { Metadata } from "next";
import { ContentInfoType } from "../_lib/contents-info";

export const contentInfo: ContentInfoType = {
  pathName: "why-can-not-recover-from-error-boundary",
  title: "なぜ、ErrorBoundaryから復帰できないのか",
  date: "2024-08-15",
  content:
    "ErrorBoundaryでエラーがキャッチされfallbackが表示された状態で再レンダリングを起こしても、再びErrorBoundaryのchildrenが表示される事はありません。どうすれば、再度childrenを表示できるのか原因と対処法を解説します。",
};

export const metadata: Metadata = {
  title: "なぜ、useはPromiseのキャッシュ判定ができるのか",
  description: "なぜ、Promiseのキャッシュ判定ができるのか。Reactの内部コードを追いながら、見ていきます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
