"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Shoe = {
  id: number;
  name: string;
  price: string;
};

type Props = {
  shoe: Shoe;
  onSuccess?: () => void;
};

export default function OrderForm({ shoe, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");

  // 🔹 Load saved user data
  useEffect(() => {
    const saved = localStorage.getItem("uttam-user");
    if (saved) {
      const user = JSON.parse(saved);
      setName(user.name || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, []);

  const handleSubmit = () => {
    const userData = { name, phone, address };

    // Save user info for next time
    localStorage.setItem("uttam-user", JSON.stringify(userData));

    // TEMP: console log order
    console.log({
      shoe,
      size,
      user: userData,
      payment: "COD",
    });

    onSuccess?.();
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        placeholder="Shoe Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <Textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <Button className="w-full" onClick={handleSubmit}>
        Place COD Order
      </Button>
    </div>
  );
}
