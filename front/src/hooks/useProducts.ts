import { ProductsFetchResponse } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { mountQuery } from "@/utils/graphqlFIlters";
import { useDeferredValue } from "react";
import { useFilter } from "./useFilter";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL!, {
      query
    })
}



export function useProducts() {
  const { type, priority, search} = useFilter()
  const searchDeffered = useDeferredValue(search)

  const query = mountQuery(type, priority)

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority]
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter(product => {
    return product.name.toLowerCase().includes(searchDeffered.toLowerCase())
  })

  return {
    data: filteredProducts
  }
}