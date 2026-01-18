import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function OTP() {
  return (
    <main className="min-h-screen bg-khaki flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-military-green mt-12">
        Verify OTP
      </h2>
      <p className="text-military-green mt-2 text-center">
        Enter the OTP sent to your mobile
      </p>

      <Input type="tel" placeholder="Enter OTP" className="mt-6 w-full max-w-md border-2 border-military-green rounded p-3 focus:outline-none focus:ring-2 focus:ring-military-green"/>


      <Link href="/shoes">
        <Button>Verify OTP</Button>
      </Link>
    </main>
  );
}
