"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/NavBar";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const shoeSizes = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we just simulate submission
    console.log({ name, phone, size });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
        <Card className="p-8 max-w-md text-center">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
            <p>We will confirm your order via call shortly.</p>
            <Button className="mt-6" onClick={() => setSubmitted(false)}>
              Place Another Order
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 bg-background text-foreground">
        
      <Card className="p-8 max-w-md w-full">
        <CardContent>
          <h2 className="text-2xl font-bold mb-6 text-center">Order Individual Pair</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <Input
                type="tel"
                placeholder="e.g. 9123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Shoe Size */}
            <div>
                
              <label className="block mb-1 font-medium">Shoe Size</label>
              <Select onValueChange={(value: string) => setSize(value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your size" />
                </SelectTrigger>
                <SelectContent>
                  {shoeSizes.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold mt-4">
              Place Order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
