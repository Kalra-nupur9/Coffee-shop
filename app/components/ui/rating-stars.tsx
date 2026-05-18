import { Star } from "lucide-react"

interface RatingStarsProps {
  total?: number
}

export default function RatingStars({
  total = 5,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: total }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}