import React from "react";
import {AppPageLayout} from "./AppStyle";
import TabContainer from "./container/TabContainer";
import InputContainer from "./container/InputContainer";
import UseStateContainer from "./container/UseStateContainer";
import DateComputeContainer from "./container/DateComputeContainer";
import TabListContainer from "./container/TabListContainer";
import CleanUpContainer from "./container/CleanUpContainer";

const App = () => {
    return (
        <AppPageLayout>

            {/*<TabContainer/>*/}
            {/*<InputContainer/>*/}
            {/*<UseStateContainer/>*/}
            {/*<DateComputeContainer/>*/}
            {/*<TabListContainer/>*/}
            <CleanUpContainer/>

        </AppPageLayout>
    )
}

export default App;