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
  description?: string,
}

export interface ProductFetchResponse {
  data: {
    Product: Product
  }
}

export interface ProductInCart extends Product {
  quantity: number
}