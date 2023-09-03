import styled from "styled-components";
import {Center} from "../../common/display";

export const TryCatchContainerLayout = styled(Center)`

`

export const MessageBox = styled(Center)`
  width: 200px;
  height: 50px;
  background-color: beige;
  border-radius: 8px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`