"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * Temporary product store
 * Later this will be fetched from backend
 */
const PRODUCTS = {
  "1": {
    name: "Police Duty Shoe",
    use: "Daily Police Duty",
    image: "/shoe1.jpg",
  },
  "2": {
    name: "Combat / Field Boot",
    use: "Training & Field Operations",
    image: "/shoe2.jpg",
  },
  "3": {
    name: "Parade Shoe",
    use: "Ceremonial & Parade Use",
    image: "/shoe3.jpg",
  },
  "4": {
    name: "Heavy Duty Boot",
    use: "Rough & Long Duty",
    image: "/shoe4.jpg",
  },
};

export default function IndividualOrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = searchParams.get("productId") || "1";
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit() {
    console.log({
      productId,
      phone,
      name,
      size,
      quantity,
      address,
      notes,
    });

    router.push("/success");
  }

  return (
    <main className="min-h-screen bg-background text-text p-6">
      <div className="max-w-xl mx-auto">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold">
            Individual Order
          </h1>
          <p className="text-muted-foreground mt-1">
            Place your order. Size and details will be confirmed over call.
          </p>
        </div>

        {/* Selected Shoe */}
        <Card className="mb-6">
          <CardContent className="p-4 flex gap-4 items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.use}</p>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardContent className="p-6 space-y-5">

            <div>
              <Label>Phone Number *</Label>
              <Input
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <Label>Name (optional)</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label>Shoe Size *</Label>
              <Input
                placeholder="e.g. 7, 8, 9"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>

            <div>
              <Label>Quantity</Label>
              <Input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div>
              <Label>Delivery Address *</Label>
              <Textarea
                placeholder="House / Barrack / Station Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <Label>Remarks (optional)</Label>
              <Textarea
                placeholder="Any fit issue or instruction"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-primary text-primary-foreground font-bold py-3"
            >
              Submit Order
            </Button>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}
