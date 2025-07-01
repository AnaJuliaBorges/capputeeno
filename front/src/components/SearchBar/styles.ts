import styled from "styled-components";

export const Inputcontainer = styled.div`
  position: relative;
  width: 256px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`


export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  font-size: 12px;
  line-height: 20px;
  background-color: ${({theme}) => theme.colors.bgSecondary};

  font-family: inherit;

  color: ${({theme}) => theme.colors.textDarker};

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`