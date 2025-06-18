import { ArrowIcon } from "@/assets/arrow";
import { FilterContainer, OptionsFilter } from "./styles";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priorityTypes";

interface PriorityItem {
  id: number;
  text: string;
  type: PriorityTypes;
}

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const priorityItems: PriorityItem[] = [
    {id: 1, text: 'Novidades', type: PriorityTypes.NEWS},
    {id: 2, text: 'Preço: maior - menor', type: PriorityTypes.BIGGEST_PRICE},
    {id: 3, text: 'Preço: menor - maior', type: PriorityTypes.MINOR_PRICE},
    {id: 4, text: 'Mais vendidos', type: PriorityTypes.POPULARITY},
  ]

  const handleopen = () => setIsOpen(prev => !prev)
  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    handleopen()
  }

    return (
      <FilterContainer>
        <button onClick={handleopen}>
          <span>Organizar por</span>
          <ArrowIcon />
        </button>

        {isOpen && 
          <OptionsFilter>
            {priorityItems.map((item: PriorityItem) => (
                <li 
                  key={item.id}
                  onClick={()=> handleUpdatePriority(item.type)}
                >
                  {item.text}
                </li>
              ))}    
          </OptionsFilter>
        }
      </FilterContainer>
    )
}