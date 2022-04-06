import React from "react";
import {AppPageLayout} from "./AppStyle";
import TabContainer from "./container/TabContainer";
import InputContainer from "./container/InputContainer";

const App = () => {
    return (
        <AppPageLayout>
            {/*<TabContainer/>*/}
            <InputContainer/>
        </AppPageLayout>
    )
}

export default App;