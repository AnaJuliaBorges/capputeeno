import styled from "styled-components";

export const DefaultPageLayout = styled.div`
  padding: 12px 24px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.bgPrimary};

  @media (min-width: ${({theme}) => theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`