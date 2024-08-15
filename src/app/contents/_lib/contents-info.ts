export type ContentInfoType = {
  pathName: string;
  title: string;
  date: string;
  content: string;
};

export const CONTENTS_INFO: ContentInfoType[] = [
  {
    pathName: "why-use-able-to-detect-caches",
    title: "なぜ、useはPromiseのキャッシュ判定ができるのか",
    date: "2024-08-11",
    content:
      "useは無限ループが起きてしまうので、渡されたPromiseがレンダリング間で変更されたか検知する事ができます。どうやって検知しているかを内部のコードを追いながら、見ていきます。",
  },
  {
    pathName: "why-can-not-recover-from-error-boundary",
    title: "なぜ、ErrorBoundaryから復帰できないのか",
    date: "2024-08-15",
    content:
      "ErrorBoundaryでエラーがキャッチされfallbackが表示された状態で再レンダリングを起こしても、再びErrorBoundaryのchildrenが表示される事はありません。どうすれば、再度childrenを表示できるのか原因と対処法を解説します。",
  },
];
