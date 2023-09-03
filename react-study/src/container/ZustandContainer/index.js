import React from "react";
import {ZustandContainerLayout} from "./style";
import NumberViewContainer from "./NumberViewContainer";
import NumberAddContainer from "./NumberAddContainer";

const ZustandContainer = props => {
    return (
        <ZustandContainerLayout>
            <NumberViewContainer/>
            <NumberAddContainer/>
        </ZustandContainerLayout>
    )
}

export default ZustandContainer;