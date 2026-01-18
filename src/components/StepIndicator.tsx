const steps = ["Phone", "Shoes", "Size", "Address"]

export function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-8 flex justify-between text-sm">
      {steps.map((step, i) => (
        <div
          key={step}
          className={`flex-1 text-center ${
            i <= current ? "font-semibold text-primary" : "text-muted-foreground"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  )
}
