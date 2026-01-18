import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Phone() {
  return (
    <main className="min-h-screen bg-khaki flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-military-green mt-12 text-center">
        Mobile Number
      </h2>
      <p className="text-military-green mt-2 text-center">
        OTP ke through aapki pehchaan hogi
      </p>

      <Input
        type="tel"
        placeholder="Enter mobile number"
        className="mt-6 w-full max-w-md"
      />

      <Link href="/otp">
        <Button>
          Continue
        </Button>
      </Link>
    </main>
  );
}
