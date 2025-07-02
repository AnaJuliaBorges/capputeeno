"use client"

import React from 'react'
import { Container, ProductInfo } from './styles'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import BackButton from '@/components/backButton'
import { formatPrice } from '@/utils/formatPrice'
import { useSearchParams } from 'next/navigation'
import { useProduct } from '@/hooks/useProduct'
import { ShoppingBagIcon } from '@/assets/shoppingBag'

export default function Product() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const data = useProduct(id!)
  console.log(data)

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate='/'/>
        <section>
          <img src={data?.image_url} />
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
            <button>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}