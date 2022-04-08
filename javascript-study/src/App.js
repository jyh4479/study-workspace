import React from "react";
import {AppPageLayout} from "./AppStyle";
import TabContainer from "./container/TabContainer";
import InputContainer from "./container/InputContainer";
import UseStateContainer from "./container/UseStateContainer";

const App = () => {
    return (
        <AppPageLayout>
            {/*<TabContainer/>*/}
            {/*<InputContainer/>*/}
            <UseStateContainer/>
        </AppPageLayout>
    )
}

export default App;