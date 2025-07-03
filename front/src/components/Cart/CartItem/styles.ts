import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  background: white;
  border-radius: 8px;
  width: 100%;
  
  @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
    flex-direction: column;
  }
  
  img {
    width: 256px;
    height: auto;
    border-radius: 8px 0px 0px 8px;
    cursor: pointer;
    
    @media (max-width: ${({theme}) => theme.tabletBreakpoint}) {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;

  p {
    color: ${({ theme }) => theme.colors.textDarker};
    font-size: 12px;
    line-height: 150%;
    margin-bottom: 24px;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    font-weight: 300;
    font-size: 20px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.textDarker};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    background: ${({theme}) => theme.colors.bgSecondary};
    height: 40px;
    border: 1.5px solid #A8A8B3;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textDarker};
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.shapesDark};
  }
`;