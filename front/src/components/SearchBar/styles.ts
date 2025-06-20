import styled from "styled-components";

export const Inputcontainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`


export const Input = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`