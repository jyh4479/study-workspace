import styled from "styled-components";
import {Center} from "../../common/display";

export const DateComputeContainerLayout = styled(Center)`
  flex-direction: column;
`

export const DateViewer = styled(Center)`
  width: 400px;
  height: 50px;
  background-color: ${props => props.bg};
  border: none;
  border-radius: 8px;
`

export const DateComputedContainer = styled(Center)`

`

export const DateComputedViewer = styled(Center)`
  width: 200px;
  height: 50px;
  background-color: ${props => props.bg};
  border: none;
  border-radius: 8px;
`