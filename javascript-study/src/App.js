import React from "react";
import {AppPageLayout} from "./AppStyle";
import TabContainer from "./container/TabContainer";
import InputContainer from "./container/InputContainer";
import UseStateContainer from "./container/UseStateContainer";
import DateComputeContainer from "./container/DateComputeContainer";
import TabListContainer from "./container/TabListContainer";

const App = () => {
    return (
        <AppPageLayout>
            {/*<TabContainer/>*/}
            {/*<InputContainer/>*/}
            {/*<UseStateContainer/>*/}
            {/*<DateComputeContainer/>*/}
            <TabListContainer/>
        </AppPageLayout>
    )
}

export default App;