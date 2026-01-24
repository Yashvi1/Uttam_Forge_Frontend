import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// USINGGGGGGGGGGGGGG

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background text-text flex items-center justify-center p-6">
      <Card className="max-w-md w-full shadow-lg">
        <CardContent className="p-8 text-center space-y-6">

          {/* Icon */}
          <CheckCircle className="mx-auto h-16 w-16 text-primary" />

          {/* Message */}
          <h1 className="text-2xl font-extrabold">
            Order Submitted Successfully
          </h1>

          <p className="text-muted-foreground">
            Thank you for your request. Our team will contact you shortly to
            confirm size, availability, and delivery details.
          </p>

          {/* Next Steps */}
          <div className="bg-card border border-border rounded-md p-4 text-sm text-left">
            <p className="font-semibold mb-2">What happens next?</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You will receive a call for confirmation</li>
              <li>Final price and delivery date will be discussed</li>
              <li>Cash on Delivery options available</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Link href="/catalog">
              <Button className="w-full bg-primary text-primary-foreground font-semibold">
                Back to Catalogue
              </Button>
            </Link>

            <Link href="/">
              <Button variant="outline" className="w-full">
                Go to Home
              </Button>
            </Link>
          </div>

          {/* Support */}
          <p className="text-xs text-muted-foreground">
            For urgent queries, call us at <strong>+91-12345-67890</strong>
          </p>

        </CardContent>
      </Card>
    </main>
  );
}
