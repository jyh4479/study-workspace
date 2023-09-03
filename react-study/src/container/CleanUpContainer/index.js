import React, {useState} from "react";
import {CleanUpContainerLayout} from "./style";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Tab, Box} from "@mui/material";
import Card from "../../components/Card";

const CleanUpContainer = props => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <CleanUpContainerLayout>

            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1"/>
                            <Tab label="Item Two" value="2"/>
                            <Tab label="Item Three" value="3"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Card content={"Item One"}/>
                    </TabPanel>
                    <TabPanel value="2">
                        <Card content={"Item Two"}/>
                    </TabPanel>
                    <TabPanel value="3">
                        <Card content={"Item Three"}/>
                    </TabPanel>
                </TabContext>
            </Box>

        </CleanUpContainerLayout>
    )
}

export default CleanUpContainer;