import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  > section {
    display: flex;
    gap: 32px;

    @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
      flex-direction: column;
    }
    
    > div {
      margin-top: 20px;

      h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.textDarker};
      }
  
      > p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: ${({ theme }) => theme.colors.textDarker};
        margin-top: 6px;
  
        span {
          font-weight: 500;
          margin-left: 4px;
        }
      }
    }
  }
`

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;