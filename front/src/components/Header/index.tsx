"use client"

import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "../CartControl";
import SearchBar from "../SearchBar";
import { Container, Logo } from "./styles";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ["latin"],
});

export default function Header() {
  const {setSearch, search} = useFilter();

  return(
    <Container>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <SearchBar placeholder="Procurando por algo específico?" value={search} handleChange={setSearch} />
        <CartControl />
      </div>
    </Container>
  )
}