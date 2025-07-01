import { SearchLoupe } from "@/assets/searchLoupe";
import { Input, Inputcontainer } from "./styles";
import { InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export default function SearchBar (props : SearchProps) {
  return(
    <Inputcontainer>
      <Input onChange={(event) => props.handleChange(event.target.value)} {...props} />
      <SearchLoupe />
    </Inputcontainer>
  )
}