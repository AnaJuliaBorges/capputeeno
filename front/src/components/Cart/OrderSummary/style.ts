import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  width: 100%;
  min-height: 450px;

  @media (min-width: ${({theme}) => theme.tabletBreakpoint}) {
    max-width: 352px;
    min-height: 100vh;
  }

  > div {
    
    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      text-transform: uppercase;
    }

    button {
      background: #51B853;
      border: none;
      width: 100%;
      border-radius: 4px;
      margin-top: 40px;
      padding: 12px 0;

      text-transform: uppercase;
      font-weight: 500;
      size: 16px;
      color: white;

      &:hover {
        text-decoration: none;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
    text-decoration: underline;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
  }
}
`

export const TotalResume = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 24px;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 16px;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.textDarker};
    }
  }
`;

export const Divisor = styled.div`
  height: 1px;
  background: #DCE2E5;
  margin-bottom: 8px;
`;

export const PriceFormat = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.textDarker};
  }
`;
