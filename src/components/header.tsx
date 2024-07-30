import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
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

const NavMenuWothMobile = () => (
  <div className="md:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center p-2">
          <DotsHorizontalIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <nav>
            {[
              {
                href: "#",
                label: "Home",
              },
              {
                href: "#",
                label: "Blog",
              },
              {
                href: "#",
                label: "About",
              },
              {
                href: "#",
                label: "Contact",
              },
            ].map(({ href, label }) => (
              <DropdownMenuLabel key={`mobile-${label}`}>
                <Link
                  href={href}
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  {label}
                </Link>
              </DropdownMenuLabel>
            ))}
          </nav>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

const NavMenuWithDesctop = () => (
  <nav className="max-md:hidden flex items-center gap-4">
    {[
      {
        href: "/",
        label: "Home",
      },
      {
        href: "#",
        label: "Blog",
      },
      {
        href: "#",
        label: "About",
      },
      {
        href: "#",
        label: "Contact",
      },
    ].map(({ href, label }) => (
      <DropdownMenuLabel key={`Desctop-${label}`}>
        <Link
          href={href}
          className="text-sm font-medium hover:underline"
          prefetch={false}
        >
          {label}
        </Link>
      </DropdownMenuLabel>
    ))}
  </nav>
);

export const Header = () => (
  <header className="bg-background border-b px-4 md:px-6 py-3 flex items-center justify-between gap-5">
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <MountainIcon className="w-6 h-6" />
      <span className="text-lg font-bold">Tech Blog</span>
    </Link>
    <NavMenuWithDesctop />
    <div className="relative flex-1 max-w-md">
      <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background"
      />
    </div>
    <NavMenuWothMobile />
  </header>
);
