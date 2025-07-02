"use client"

import { Container } from "./styles";
import { ProductCard } from "../ProductsCard";
import { Product } from "@/types/products";
import { useProducts } from "@/hooks/useProducts";

export function ProductsList() {
  const { data } = useProducts();
  console.log(data)

  return (
    <Container>
      {data?.map((product: Product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))
      }
    </Container>
  )
}