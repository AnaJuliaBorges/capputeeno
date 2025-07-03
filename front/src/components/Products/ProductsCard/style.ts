import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  cursor: pointer;

  img {
    width: 256px;
    height: 300px;
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin: 8px 0px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.textDarker};
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.shapesDark};
  }
`

export const Divider = styled.div`
  width: 228px;
  height: 1px;
  background-color: ${({theme}) => theme.colors.shapes};
`