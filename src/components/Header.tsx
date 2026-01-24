import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react";



export function Header() {


return (
  <header className="bg-primary text-primary-foreground px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Left: Logo */}
    <h1 className="text-xl font-extrabold">Uttam Forge</h1>


    {/* Center: Navigation */}
                <nav className="hidden md:flex gap-8 font-medium text-lg">
  <Link
    href="/"
    className="relative text-white px-2 py-1 rounded-md transition-all duration-200 
               hover:text-accent hover:scale-105 hover:bg-white/10"
  >
    Home
  </Link>

  <Link
    href="/catalog"
    className="relative text-white px-2 py-1 rounded-md transition-all duration-200 
               hover:text-accent hover:scale-105 hover:bg-white/10"
  >
    Catalogue
  </Link>

  <Link
    href="/bulk-order"
    className="relative text-white px-2 py-1 rounded-md transition-all duration-200 
               hover:text-accent hover:scale-105 hover:bg-white/10"
  >
    Bulk Orders
  </Link>
</nav>
    

    {/* Right: Call button and phone */}
    <div className="flex items-center space-x-4">
      <button className="bg-accent px-4 py-2 rounded text-primary-foreground font-semibold hover:bg-accent/90 transition">
        Call Now
      </button>
      <span className="hidden sm:flex items-center space-x-1 text-sm">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.21 1.09l-2.257 2.257a11.042 11.042 0 005.516 5.516l2.257-2.257a1 1 0 011.09-.21l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V5z"
          ></path>
        </svg>
        <span>+91 12345 67890</span>
      </span>
    </div>
  </div>
</header>

)
}


