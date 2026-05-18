import ClassicEspresso from "@/app/assets/images/home/4.jpg"
import VelvetCappuccino from "@/app/assets/images/home/2.jpg"
import VanillaBeanLatte from "@/app/assets/images/home/5.jpg"
import { Drink } from "@/app/types"
export const drinks: Drink[] = [
  {
    id: 1,
    title: "Classic Espresso",
    description: "Single origin Ethiopian shot, bright and floral.",
    price: 3.5,
    image: ClassicEspresso,
    alt: "Classic Espresso",
  },
  {
    id: 2,
    title: "Velvet Cappuccino",
    description:
      "Equal parts espresso, steamed milk and silky foam.",
    price: 4.75,
    image: VelvetCappuccino,
    alt: "Velvet Cappuccino",
  },
  {
    id: 3,
    title: "Vanilla Bean Latte",
    description:
      "Madagascar vanilla bean steeped in steamed milk.",
    price: 5.5,
    image: VanillaBeanLatte,
    alt: "Vanilla Bean Latte",
  },
]