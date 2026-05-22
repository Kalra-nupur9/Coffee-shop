import MenuItemCard from "./menu-item-card"

import { menuItems } from "@/app/data/menu-items"

export default function MenuGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {menuItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}