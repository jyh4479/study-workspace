import React from "react";
import {TestGrid, TestGridBack, TuiTableContainerLayout} from "./style";

import "tui-grid/dist/tui-grid.css";

//https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/custom-renderer.md#%EB%94%94%ED%8F%B4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%9F%AC-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81
const TuiDataTableContainer = () => {

    const data = [
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
        {id: 3, name: 'Chart'},
        {id: 1, name: 'Editor'},
        {id: 2, name: 'Grid'},
    ];

    const columns = [
        {name: 'id', header: 'ID'},
        {name: 'name', header: 'Name'}
    ];


    return (
        <TuiTableContainerLayout>
            <TestGridBack>
                <TestGrid
                    data={data}
                    columns={columns}
                    // heightResizable={true}
                    rowHeaders={['rowNum']}
                    pageOptions={{
                        useClient: true,
                        page: 1,
                        perPage: 10,
                    }}
                />
            </TestGridBack>
        </TuiTableContainerLayout>
    )
}

export default TuiDataTableContainer;