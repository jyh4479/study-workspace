import React from "react";
import {ParentBox, WithTestContainerLayout} from "./style";

const WithTestContainer = () => {
    return (
        <WithTestContainerLayout>
            <ParentBox/>
        </WithTestContainerLayout>
    )
}

export default WithTestContainer;