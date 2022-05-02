import React from "react";
import {AppPageLayout} from "./AppStyle";
import {MuiDataTableContainer, TuiDataTableContainer} from "./container/TableTestContainer";

const App = () => {
    return (
        <AppPageLayout>

            {/*<TabContainer/>*/}
            {/*<InputContainer/>*/}
            {/*<UseStateContainer/>*/}
            {/*<DateComputeContainer/>*/}
            {/*<TabListContainer/>*/}
            {/*<CleanUpContainer/>*/}
            {/*<ZustandContainer/>*/}
            {/*<SetStateContainer/>*/}
            {/*<TryCatchContainer/>*/}

            <MuiDataTableContainer/>
            <TuiDataTableContainer/>

        </AppPageLayout>
    )
}

export default App;