"use client"

import BackButton from '@/components/backButton'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import { Container, Items } from './styl.es'
import { formatPrice } from '@/utils/formatPrice'
import { ProductInCart } from '@/types/products'
import { useLocalStorage } from '@/hooks/uselocalStorage'
import { CartItem } from '@/components/Cart/CartItem'
import { OrderSummary } from '@/components/Cart/OrderSummary'

export default function CartPage() {

  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart', [])

  const totalPrice = value.reduce((acc: number, item: ProductInCart) => acc + item.price_in_cents * item.quantity, 0)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if(item.id !== id) return item
      return {...item, quantity: quantity}
    }) 

    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newCart = value.filter((item: ProductInCart) => item.id !== id)
   updateLocalStorage(newCart)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton />
        {value.length === 0 ? (
          <section>
            <div>
              <h1>Seu carrinho</h1>
              <p>
                Sem produtos no seu carrinho
              </p>
            </div>
          </section>
        ) : (
          <section>
            <div>
              <h1>Seu carrinho</h1>
              <p>
                Total ({value.length} produtos) 
                <span>{formatPrice(totalPrice)}</span>
              </p>
              <Items>
                {value.map((item: ProductInCart) => (
                  <CartItem key={item.id} product={item} handleUpdateQuantity={handleUpdateQuantity} handleDeleteItem={handleDeleteItem}/>
                  ))}
              </Items>
            </div>
            <OrderSummary totalPrice={totalPrice} />
          </section>
        )}
      </Container>
    </DefaultPageLayout>
  )
}

