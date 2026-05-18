import { Coffee } from "lucide-react"

interface BadgeItemProps {
  label: string
}

export function BadgeItem({ label }: BadgeItemProps) {
  return (
    <span className="flex items-center gap-6">
      {label}

      <Coffee
        className="h-5 w-5 text-amber-500"
        aria-hidden="true"
      />
    </span>
  )
}