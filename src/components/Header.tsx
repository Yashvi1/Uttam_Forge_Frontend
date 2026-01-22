import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react";



export function Header() {
  return (
    <div>
    <header className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      

      <h1 className="text-xl font-extrabold">Uttam Forge</h1>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            

            <nav className="hidden md:flex gap-6 font-medium">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/catalog" className="hover:text-primary">
                Catalogue
              </Link>
              <Link href="/bulk-order" className="text-white hover:text-primary">
                Bulk Orders
              </Link>
            </nav>

            
          </div>
          
      <Button variant="default" className="bg-accent hover:bg-yellow-600">
        Call Now
      </Button>

      <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              +91 12345 67890
            </a>
    </header>

    <header className="border-b border-border bg-card">
          
        </header>
        </div>

  );
}


