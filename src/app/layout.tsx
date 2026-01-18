import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import "./globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Navbar from "@/components/NavBar";
import { PhoneCall } from "lucide-react";

export const metadata = {
  title: "Uttam Forge | Duty Footwear Supplier",
  description:
    "Reliable duty footwear for Police, Army, NCC and institutional forces.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-extrabold tracking-wide">
              Uttam Forge
            </Link>

            <nav className="hidden md:flex gap-6 font-medium">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/catalog" className="hover:text-primary">
                Catalogue
              </Link>
              <Link href="/bulk-order" className="hover:text-primary">
                Bulk Orders
              </Link>
            </nav>

            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <PhoneCall className="h-4 w-4" />
              +91 12345 67890
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-border text-center text-sm text-muted-foreground py-6">
          © 2026 Uttam Forge. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
