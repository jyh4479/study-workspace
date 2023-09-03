import styled from "styled-components";
import {Center} from "../../../common/display";
import "tui-grid/dist/tui-grid.css";
import Grid from "@toast-ui/react-grid";

export const TuiTableContainerLayout = styled(Center)`
  background-color: beige;
`

export const TestGrid = styled(Grid)`
  background-color: #282c34 !important;
`

export const TestGridBack = styled.div`
  background-color: #282c34 !important;

  & > div {
    background-color: #61dafb;
  }
`