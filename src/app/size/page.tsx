import { ProductPreview } from "@/components/ProductPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Size() {
  return (
    <main className="min-h-screen bg-khaki flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-military-green mt-12">
        Size Details
      </h2>

<Input className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Height (cm)"/>
      
      <Input className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Weight (kg)" />
      <Input className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3" placeholder="Shoe size" />
      <select className="mt-4 w-full max-w-md border-2 border-military-green rounded p-3">
        <option>Foot Width: Normal</option>
        <option>Foot Width: Wide</option>
      </select>

      <Link href="/address">
        <Button>Continue to Address</Button>
      </Link>

      <ProductPreview/>
    </main>
  );
}
