"use client"

import { FilterContextProvider } from '@/contexts/filterContext';
import { myTheme } from '@/utils/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';

interface DefaultProvidersProps {
  children: ReactNode
} 

export default function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={myTheme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}