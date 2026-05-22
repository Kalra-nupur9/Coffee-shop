import Espresso from "@/app/assets/images/menu/espresso.jpg"

import { MenuItem } from "@/app/types"

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Classic Espresso",
    description:
      "Single origin Ethiopian shot, bright and floral.",
    price: 3.5,
    category: "Espresso",
    image: Espresso,
    popular: true,
  },
]