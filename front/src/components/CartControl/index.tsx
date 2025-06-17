import { CartIcon } from "@/assets/cart-icon";
import { useLocalStorage } from "@/hooks/uselocalStorage";
import { CartCount, Container } from "./styles";

export function CartControl() {
   const { value } = useLocalStorage('cart-items', [])

  return (
    <Container>
      <CartIcon/>
      <CartCount>{value.length}</CartCount>
    </Container>
  )
}