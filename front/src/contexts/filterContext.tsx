"use client"

import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityTypes) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

  return (
    <FilterContext.Provider 
      value={{
        search, 
        page, 
        type, 
        priority, 
        setSearch, 
        setPage, 
        setType, 
        setPriority}}>
      {children}
    </FilterContext.Provider>
  )
}