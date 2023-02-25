export type Product = {
  name: string
  subject: string[]
  price: number
  category: string
  src: string
}

export type ProductRespone = {
  products: Product[]
  maxPrice: number
}

export type ProductSort = 'name' | 'priceAsc' | 'priceDesc'
