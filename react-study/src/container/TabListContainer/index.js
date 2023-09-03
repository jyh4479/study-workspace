import React, {useState} from "react";
import {TabListContainerLayout} from "./style";
import {Box, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';

const TabListContainer = props => {

    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabListContainerLayout>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab value={'0'} label="Item One"/>
                        <Tab value={'1'} label="Item Two"/>
                        <Tab value={'2'} label="Item Three"/>
                        <Tab value={'3'} label="Item Four"/>
                        <Tab value={'4'} label="Item Five"/>
                        <Tab value={'5'} label="Item Six"/>
                        <Tab value={'6'} label="Item Seven"/>
                    </TabList>
                </Box>
                <TabPanel value={'0'} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={'1'} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={'2'} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={'3'} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={'4'} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={'5'} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={'6'} index={2}>
                    Item Three
                </TabPanel>
            </TabContext>
        </TabListContainerLayout>
    )
}

export default TabListContainer;