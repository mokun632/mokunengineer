import Link from "next/link";
import type { SVGProps } from "react";

const MountainIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <title>Home</title>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

const NavMenu = () => (
  <nav className="flex items-center gap-4">
    {[
      {
        href: "#",
        label: "Contact",
      },
    ].map(({ href, label }) => (
      <Link
        href={href}
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        {label}
      </Link>
    ))}
  </nav>
);

export const Header = () => (
  <header className="bg-background border-b px-4 md:px-6 py-3 flex items-center justify-between gap-5">
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <MountainIcon className="w-6 h-6" />
      <span className="text-lg font-bold">Tech Blog</span>
    </Link>
    <NavMenu />
  </header>
);
