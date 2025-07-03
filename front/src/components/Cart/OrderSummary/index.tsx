import { formatPrice } from '@/utils/formatPrice'
import React from 'react'
import { Container, Divisor, PriceFormat, TotalResume } from './style'

interface OrderProps {
  totalPrice: number
}

export function OrderSummary({ totalPrice }: OrderProps) {
  return (
    <Container>
      <div>
        <h2>Resumo do Pedido</h2>

        <TotalResume>
          <div>
            <span>Subtotal de produtos</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 40</span>
          </div>
        </TotalResume>

        <Divisor />

        <PriceFormat>
          <span>Total</span>
          <span>{formatPrice(totalPrice + 4000)}</span>
        </PriceFormat>

        <button>Finalizar a Compra</button>
      </div>

      <footer>
        <a>Ajuda</a>
        <a>Reembolsos</a>
        <a>Entregas e Frete</a>
        <a>Trocas e devoluções</a>
      </footer>
    </Container>
  )
}