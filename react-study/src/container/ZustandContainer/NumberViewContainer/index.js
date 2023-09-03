import React from "react";
import countStore from "../../../store/countStore";

const NumberViewContainer = props => {

    const {count} = countStore();

    return(
        <div>{count}</div>
    )
}

export default NumberViewContainer;