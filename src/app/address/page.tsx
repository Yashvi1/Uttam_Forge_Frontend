import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { ProductPreview } from "@/components/ProductPreview";

export default function Address() {
  return (
    <main className="min-h-screen bg-khaki flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-military-green mt-12">
        Delivery Address
      </h2>

      <Input className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Full Name" />
      <Input className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Mobile Number" />
      <textarea className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Address" />

      <Link href="/confirm">
        <Button>Place COD Order</Button>

      </Link>

      <ProductPreview />

    </main>
  );
}
