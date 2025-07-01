import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: inherit;
    font-size: 14px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.textDarker};
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export const OptionsFilter = styled.ul`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  top: 100%;
  right: 0;
  width: 176px;
  z-index: 999;

  li {
    color: ${({ theme }) => theme.colors.textDarker};
    font-size: 14px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;