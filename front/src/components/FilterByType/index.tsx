import { FilterType } from "@/types/filterTypes";
import { FilterItem, FilterList } from "./styles";
import { useFilter } from "@/hooks/useFilter";

interface FilterItem {
  id: number;
  text: string;
  type: FilterType;
}

export function FilterByType() {
  const { type, setType } = useFilter();

  const filterItems: FilterItem[] = [
    {id: 1, text: 'Todos os produtos', type: FilterType.ALL},
    {id: 2, text: 'Camisas', type: FilterType.SHIRT},
    {id: 3, text: 'Canecas', type: FilterType.MUG},
  ]

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <FilterList>
      {filterItems.map((item: FilterItem) => (
        <FilterItem 
          key={item.id}
          selected={type === item.type}
          onClick={()=> handleChangeType(item.type)}
        >
          {item.text}
        </FilterItem>
      ))}      
    </FilterList>
  )
}