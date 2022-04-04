import React from "react";
import styled from "styled-components";
import {Center} from "../../common/display";

const TabStyle = styled(Center)`
  width: ${props => props.width ? props.width : 30}px;
  height: ${props => props.height ? props.height : 30}px;

  border: 1px solid gainsboro;
  border-radius: 4px;
  margin: 10px;
`

const Tab = props => {

    const {value, children} = props;

    return (
        <TabStyle>
            {children}
        </TabStyle>
    )
}

export default Tab;