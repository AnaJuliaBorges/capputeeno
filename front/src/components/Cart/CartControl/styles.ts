import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`

export const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;

  background-color: ${({theme}) => theme.colors.deleteColor};
  color: white;

  margin-left: -10px;
`