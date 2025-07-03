import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 640px;
      width: 50%;

      @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
        width: 100%;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        background: #115D8C;
        mix-blend-mode: multiply;
        border-radius: 4px;
        border: none;

        cursor: pointer;
        padding: 10px 0;

        text-align: center;
        color: white;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
          margin-top: 24px;
        }
      }
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.textDarker};
    line-height: 150%;
    font-size: 16px;
  }

  h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.textDarker};
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.shapesDark};
    margin-bottom: 24px;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textDarker};
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textDarker};
    }
  }
`
