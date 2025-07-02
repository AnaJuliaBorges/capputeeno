import { formatPrice } from "@/utils/formatPrice";
import { Card, Divider } from "./style";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
  id: string,
}


export function ProductCard(props: ProductCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/product?id=${props.id}`);
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{formatPrice(props.price)}</p>
      </div>
    </Card>
  )
}