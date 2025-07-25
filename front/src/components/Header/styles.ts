import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`

export const Logo = styled.a`
  color: ${({theme}) => theme.colors.logoColor};
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

