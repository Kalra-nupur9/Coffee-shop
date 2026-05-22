// types/index.ts

import { LucideIcon } from "lucide-react"
import { StaticImageData } from "next/image"


export interface Drink {
  id: number
  title: string
  description: string
  price: number
  image: StaticImageData
  alt: string
}

export interface StoryStat {
  id: number
  icon: LucideIcon
  value: string
  label: string
}


export interface GalleryImage {
  id: number
  image: StaticImageData
  alt: string
}
export interface MenuItem {
  id: number
  title: string
  description: string
  price: number
  category: string
  image?: StaticImageData
  popular?: boolean
  vegan?: boolean
}