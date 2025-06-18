import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

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
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }
`

export const Divider = styled.div`
  width: 228px;
  height: 1px;
  background-color: var(--shapes);
`