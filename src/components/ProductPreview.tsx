import Image from "next/image"
import { Card } from "@/components/ui/card"

export function ProductPreview() {
  return (
    <Card className="mb-6 flex items-center gap-4 p-4">
      <Image
        src="/shoes/police-shoe.png"
        alt="Police Duty Shoe"
        width={80}
        height={80}
      />
      <div>
        <p className="font-medium">Police Duty Shoe</p>
        <p className="text-sm text-muted-foreground">
          Cash on Delivery • Size confirmed on call
        </p>
      </div>
    </Card>
  )
}
