import React from "react";
import countStore from "../../../store/countStore";

const NumberAddContainer = props => {

    const {addCount} = countStore();

    return (
        <button onClick={() => addCount()}>add 1</button>
    )
}

export default NumberAddContainer;