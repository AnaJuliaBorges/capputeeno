"use client"

import { useFilter } from "@/hooks/useFilter";
import { Container, Logo } from "./styles";
import { Saira_Stencil_One } from "next/font/google";
import { CartControl } from "../Cart/CartControl";
import SearchBar from "../Filters/SearchBar";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ["latin"],
});

export default function Header() {
  const {setSearch, search} = useFilter();

  const router = useRouter();
  
    const handleNavigate = () => {
      router.push("/");
    }
 
  return(
    <Container>
      <Logo className={sairaStencil.className} onClick={handleNavigate}>Capputeeno</Logo>
      <div>
        <SearchBar placeholder="Procurando por algo específico?" value={search} handleChange={setSearch} />
        <CartControl />
      </div>
    </Container>
  )
}