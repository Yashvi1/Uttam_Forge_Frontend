import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Shoes() {
  return (
    <main className="min-h-screen bg-khaki flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-military-green mt-12">
        Select Shoes
      </h2>

      <div className="mt-6 w-full max-w-md border-2 border-military-green rounded p-4 shadow bg-white">
        <h3 className="font-medium text-military-green">Police Duty Leather Shoe</h3>
        <p className="text-gray-700 mt-1">Strong • Comfortable • Duty-tested</p>

        <Link href="/size">
          <Button>Select Size</Button>
        </Link>
      </div>
    </main>
  );
}
