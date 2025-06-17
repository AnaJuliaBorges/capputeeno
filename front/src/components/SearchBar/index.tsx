import { SearchLoupe } from "@/assets/search-loupe";
import { Input, Inputcontainer } from "./styles";
import { InputHTMLAttributes } from "react";

type SearchProps = InputHTMLAttributes<HTMLInputElement>

export default function SearchBar (props : SearchProps) {
  return(
    <Inputcontainer>
      <Input {...props} />
      <SearchLoupe />
    </Inputcontainer>
  )
}