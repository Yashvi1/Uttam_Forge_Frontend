import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-background shadow-md border-b border-border sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-extrabold text-foreground">
          Uttam Forge
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-foreground font-semibold hover:text-primary"
          >
            NavBar Home
          </Link>
          <Link
            href="/order"
            className="text-foreground font-semibold hover:text-primary"
          >
            Individual Order
          </Link>
          <Link
            href="/bulk-order"
            className="text-foreground font-semibold hover:text-primary"
          >
            Bulk Order
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:XXXXXXXXXX" className="text-sm underline">
            Call Now
          </a>
          <Link href="/phone">
            <Button size="sm">Order Shoes</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
