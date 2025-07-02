import { ProductFetchResponse } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL!, {
      query: `
        query{
          Product(id: "${productId}"){
            name,
            category,
            price_in_cents,
            image_url,
            description,
          }
        }
      `
    })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id,
  });

  return data?.data?.data?.Product;
}