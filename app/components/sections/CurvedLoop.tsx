import type { Metadata } from "next"
import Marquee from "../ui/marquee"

export const metadata: Metadata = {
  title: "Premium Coffee Experience",
  description:
    "Single origin coffee, slow roasted beans, and handcrafted drinks.",
}

export default function HomePage() {
  return (
    <main>
      <Marquee />
    </main>
  )
}