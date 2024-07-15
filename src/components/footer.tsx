import Link from "next/link";

export const Footer = () => (
  <footer className="bg-muted border-t px-4 md:px-6 py-6 text-sm text-muted-foreground">
    <div className="container max-w-7xl mx-auto flex items-center justify-between">
      <p>&copy; 2024 Tech Blog. All rights reserved.</p>
      <nav className="flex items-center gap-4">
        <Link href="#" className="hover:underline" prefetch={false}>
          Privacy
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Terms
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Contact
        </Link>
      </nav>
    </div>
  </footer>
);
