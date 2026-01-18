import Link from "next/link"
import { Button } from "@/components/ui/button"



export function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-extrabold">Uttam Forge</h1>
      <Button variant="default" className="bg-accent hover:bg-yellow-600">
        Call Now
      </Button>
    </header>
  );
}


