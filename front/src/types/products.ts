export interface ProductsFetchResponse {
  data: {
    allProducts: Product[]
  }
}

export interface Product {
  name: string,
  price_in_cents: number,
  id: string
  image_url: string,
  category: string,
}