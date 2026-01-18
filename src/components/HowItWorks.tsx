import { Card } from "@/components/ui/card"

const steps = [
  {
    title: "Choose Shoe",
    desc: "Select police duty shoe",
  },
  {
    title: "Share Size",
    desc: "Height, weight & shoe size",
  },
  {
    title: "Confirm on Call",
    desc: "We call you to confirm size",
  },
  {
    title: "Cash on Delivery",
    desc: "Pay only when you receive",
  },
]

export function HowItWorks() {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold mb-8">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <Card key={step.title} className="p-5">
            <h3 className="font-medium">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {step.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
