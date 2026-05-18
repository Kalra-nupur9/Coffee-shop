import {
  Coffee,
  Award,
  Leaf,
} from "lucide-react"

import { StoryStat } from "@/app/types"

export const storyStats: StoryStat[] = [
  {
    id: 1,
    icon: Coffee,
    value: "12+",
    label: "Daily roasts",
  },
  {
    id: 2,
    icon: Award,
    value: "7",
    label: "Years brewing",
  },
  {
    id: 3,
    icon: Leaf,
    value: "100%",
    label: "Direct trade",
  },
]