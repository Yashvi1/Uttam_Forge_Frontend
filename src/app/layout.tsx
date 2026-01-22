import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "./globals.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Navbar from "@/components/NavBar";
import { PhoneCall } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
        <Header />

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
