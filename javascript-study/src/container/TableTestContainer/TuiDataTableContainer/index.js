import React, {useEffect} from "react";
import {columns, data} from "./data";
import "tui-grid/dist/tui-grid.css";
import Grid from "@toast-ui/react-grid";
import {isEmpty} from "lodash";

//https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/custom-renderer.md#%EB%94%94%ED%8F%B4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%9F%AC-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81
// https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/sort.md
const TuiDataTableContainer = () => {
    const tableRef = React.createRef();
    const currentEvent = {};

    const addCustomEventListener = (el, type, func) => {
        el.addEventListener(type, func)

        if (isEmpty(currentEvent[type])) {
            currentEvent[type] = [];
        }
        currentEvent[type].push([el, func]);
    }

    const removeCustomEventListener = type => {
        if (!isEmpty(currentEvent[type])) {
            currentEvent[type].forEach(componentInfo => {
                const component = componentInfo[0];
                const event = componentInfo[1];

                component.removeEventListener(type, event);
            })
        }
    };

    useEffect(() => {
        const tableHeaders = tableRef.current.querySelectorAll(".tui-grid-btn-sorting");

        tableHeaders.forEach(tableHeader => {

            // removeCustomEventListener(tableHeader, 'click');

            addCustomEventListener(tableHeader, 'click', () => {
                if (tableHeader.classList.contains("tui-grid-btn-sorting-up")) {
                    console.log("up");
                    tableHeader.style.background = `green`
                } else if (tableHeader.classList.contains("tui-grid-btn-sorting-down")) {
                    console.log("down");
                    tableHeader.style.background = `blue`
                } else {
                    console.log("test");
                    tableHeader.style.background = `red`
                }
            });
        })
        return () => removeCustomEventListener('click');
        //eslint-disable-next-line
    }, [])

    const MyComponent = () => (
        <div ref={tableRef}>
            <Grid
                data={data}
                columns={columns}
                rowHeight={25}
                bodyHeight={200}
                heightResizable={true}
                rowHeaders={['rowNum']}

                pageOptions={{
                    useClient: true, page: 1, perPage: 10,
                }}
            />
        </div>
    );

    return MyComponent();
}

export default TuiDataTableContainer;