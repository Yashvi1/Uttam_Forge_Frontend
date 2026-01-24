"use client";

// USINGGGGGGGGGGGGG

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

/**
 * Temporary product map.
 * Later this will come from backend using productId
 */
const PRODUCTS = {
  "1": {
    name: "Police Duty Shoe",
    use: "Daily Police Duty",
    image: "/shoes1.jpg",
  },
  "2": {
    name: "Combat / Field Boot",
    use: "Training & Field Operations",
    image: "/shoes2.jpg",
  },
  "3": {
    name: "Parade Shoe",
    use: "Ceremonial & Parade Use",
    image: "/main-shoe.jpg",
  },
  "4": {
    name: "Heavy Duty Boot",
    use: "Rough & Long Duty",
    image: "/shoes1.jpg",
  },
};

export default function BulkOrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = searchParams.get("productId") || "1";
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [orgType, setOrgType] = useState("");
  const [unitName, setUnitName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sizes, setSizes] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit() {
    console.log({
      productId,
      orgType,
      unitName,
      contactName,
      phone,
      email,
      quantity,
      sizes,
      location,
      notes,
    });

    router.push("/success");
  }

  return (
    <main className="min-h-screen bg-background text-text p-6">
      <div className="max-w-3xl mx-auto">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold">
            Bulk / Unit Order
          </h1>
          <p className="text-muted-foreground mt-1">
            Submit your requirement. Our team will contact you for quotation and confirmation.
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
          <CardContent className="p-6 space-y-6">

            {/* Organization */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Organization Details</h3>

              <div>
                <Label>Organization Type *</Label>
                <Input
                  placeholder="Police / Army / NCC / Other"
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                />
              </div>

              <div>
                <Label>Unit / Battalion / Institution Name *</Label>
                <Input
                  placeholder="e.g. XYZ Police Station / 5th Battalion"
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Person</h3>

              <div>
                <Label>Name *</Label>
                <Input
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div>
                <Label>Phone Number *</Label>
                <Input
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <Label>Email (optional)</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Order */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Order Requirement</h3>

              <div>
                <Label>Approximate Quantity *</Label>
                <Input
                  placeholder="e.g. 50"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <Label>Size Breakdown *</Label>
                <Textarea
                  placeholder="e.g. Size 7 - 10 pairs, Size 8 - 20 pairs"
                  value={sizes}
                  onChange={(e) => setSizes(e.target.value)}
                />
              </div>

              <div>
                <Label>Delivery Location *</Label>
                <Input
                  placeholder="City, State"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Notes */}
            <div>
              <Label>Remarks / Tender / Quotation Notes</Label>
              <Textarea
                placeholder="Mention if quotation, GST, tender document required"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-primary text-primary-foreground font-bold py-3"
            >
              Submit Bulk Requirement
            </Button>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}
