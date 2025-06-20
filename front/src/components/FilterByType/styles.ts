import styled from "styled-components";

interface FilterItemProps {
  selected: boolean
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;
  
  font-weight: ${({selected}) => selected ? '600' : ' 400'};
  border-bottom: ${({selected}) => selected ? '4px solid var(--orange-low)' : ''};
`
