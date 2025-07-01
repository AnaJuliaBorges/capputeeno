"use client"

import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.bgPrimary};
`

export default function Home() {

  return (
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
  );
}