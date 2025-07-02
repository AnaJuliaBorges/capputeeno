"use client"

import React from 'react'
import { Container, ProductInfo } from './styles'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import BackButton from '@/components/backButton'
import { formatPrice } from '@/utils/formatPrice'
import { useSearchParams } from 'next/navigation'
import { useProduct } from '@/hooks/useProduct'
import { ShoppingBagIcon } from '@/assets/shoppingBag'
import { Product as ProductType } from '@/types/products'

export default function Product() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const data = useProduct(id!)
  
  const addToCart = () => {
    if (!data) return
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingProduct = cart.find((item: ProductType) => item.id === id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cart.push({ ...data, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Produto adicionado ao carrinho!')
  }


  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate='/'/>
        <section>
          <img src={data?.image_url} alt={data?.name} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={addToCart}>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}