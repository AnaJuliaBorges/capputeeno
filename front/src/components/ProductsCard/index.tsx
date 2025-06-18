import { formatPrice } from "@/utils/formatPrice";
import { Card, Divider } from "./style";

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}


export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{formatPrice(props.price)}</p>
      </div>
    </Card>
  )
}