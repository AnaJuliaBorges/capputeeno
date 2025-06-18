import { FilterType } from "@/types/filterTypes";
import { ProductsFetchResponse } from "@/types/products";
import { getCategoryByType } from "@/utils/getCategoryByType";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL!, {
      query
    })
}

const mountQuery = (type: FilterType) => {
  if(type === FilterType.ALL) return `query{
      allProducts{
        id
        name
        price_in_cents
        image_url
      }
    }
  `

  return ` query {
    allProducts(filter: {category: "${getCategoryByType(type)}"}){
      id
      name
      price_in_cents,
      image_url,
      category,
    }
  }`
}

export function useProducts() {
  const { type } = useFilter()
  const query = mountQuery(type)

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type]
  })

  return {
    data: data?.data?.data?.allProducts
  }
}