import React from "react";
import styled from "styled-components";
import {Center} from "../../common/display";

const TabStyle = styled(Center)`
  width: ${props => props.width ? props.width : 30}px;
  height: ${props => props.height ? props.height : 30}px;

  border: 1px solid gainsboro;
  border-radius: 4px;
  margin: 10px;

  cursor: ${props => props.animation && "pointer"};

  &:active {
    transform: ${props => props.animation && "scale(0.95)"};
  }
`

const Tab = props => {

    const {animation, value, children, onClick} = props;

    return (
        <TabStyle onClick={onClick} animation={animation}>
            {children}
        </TabStyle>
    )
}

export default Tab;