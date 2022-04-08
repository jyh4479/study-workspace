import React from "react";
import {AppPageLayout} from "./AppStyle";
import TabContainer from "./container/TabContainer";
import InputContainer from "./container/InputContainer";
import UseStateContainer from "./container/UseStateContainer";
import DateComputeContainer from "./container/DateComputeContainer";

const App = () => {
    return (
        <AppPageLayout>
            {/*<TabContainer/>*/}
            {/*<InputContainer/>*/}
            {/*<UseStateContainer/>*/}
            <DateComputeContainer/>
        </AppPageLayout>
    )
}

export default App;