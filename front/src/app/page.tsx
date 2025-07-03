"use client"

import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { FilterBar } from "@/components/Filters/FilterBar";
import { ProductsList } from "@/components/Products/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}