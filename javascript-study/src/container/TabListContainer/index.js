import React, {useState} from "react";
import {TabListContainerLayout} from "./style";
import {Tabs, Tab} from '@mui/material';
import {TabList, TabContext} from '@mui/lab';

const TabListContainer = props => {

    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabListContainerLayout>
            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab valu={'0'} label="Item One"/>
                    <Tab valu={'1'} label="Item Two"/>
                    <Tab valu={'2'} label="Item Three"/>
                    <Tab valu={'3'} label="Item Four"/>
                    <Tab valu={'4'} label="Item Five"/>
                    <Tab valu={'5'} label="Item Six"/>
                    <Tab valu={'6'} label="Item Seven"/>
                </TabList>
            </TabContext>
        </TabListContainerLayout>
    )
}

export default TabListContainer;