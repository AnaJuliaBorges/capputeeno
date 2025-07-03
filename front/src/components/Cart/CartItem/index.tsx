import { TrashIcon } from '@/assets/trashIcon';
import { ProductInCart } from '@/types/products'
import { formatPrice } from '@/utils/formatPrice'
import React, { ChangeEvent } from 'react'
import { Container, Details, FooterItem, HeaderItem } from './styles';

interface CartItemsProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void
  handleDeleteItem(id: string): void
}

export function CartItem({ product, handleUpdateQuantity, handleDeleteItem } : CartItemsProps) {

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <Container>
      <img src={product.image_url} alt={product.name} />
      <Details>
        <HeaderItem>
          <h2>{product.name}</h2>
          <button onClick={() => handleDeleteItem(product.id)} aria-label='Delete'>
            <TrashIcon/>
          </button>
        </HeaderItem>
        <p>{product.description}</p>
        <FooterItem>
          <select name="seledted" id={product.id} value={product.quantity} onChange={handleSelectChange}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span>{formatPrice(product.quantity*product.price_in_cents)}</span>
        </FooterItem>
      </Details>
    </Container>
  )
}
