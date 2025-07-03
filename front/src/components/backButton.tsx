"use client"

import styled from "styled-components";

import React from 'react'
import { BackIcon } from "@/assets/backIcon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryText};

  svg {
    width: 24px;
    height: 24px;
  }
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function BackButton(props: ButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.back();
  }

  return (
    <Button onClick={handleNavigate} {...props}>
      <BackIcon />
      Voltar
    </Button>
  )
}
