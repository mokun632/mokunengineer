import Link from "next/link";
import { SVGProps } from "react";

export default function NotFound() {
  return (
    <div className="flex-1 grid items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-full bg-[#ff4d4f] p-4">
          <TriangleAlertIcon className="h-12 w-12 text-white" />
        </div>
        <h1 className="mt-4 text-7xl font-bold tracking-tight text-[#333]">
          404
        </h1>
        <p className="mt-4 text-lg text-[#666]">
          お探しのページが見つかりませんでした。ブログのホームページに戻ってお探しの情報を見つけてください。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[#1890ff] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#40a9ff] focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:ring-offset-2"
            prefetch={false}
          >
            ブログのホームページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

const TriangleAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
};
