import { CartIcon } from "@/assets/cartIcon";
import { useLocalStorage } from "@/hooks/uselocalStorage";
import { CartCount, Container } from "./styles";
import { useRouter } from "next/navigation";

export function CartControl() {
   const { value } = useLocalStorage('cart', [])

  const router = useRouter()
  
  const handleNavigate = () => {
    router.push(`/cart`);
  }
  
  return (
    <Container onClick={handleNavigate}>
      <CartIcon/>
      <CartCount>{value.length}</CartCount>
    </Container>
  )
}