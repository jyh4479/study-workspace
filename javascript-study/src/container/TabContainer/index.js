import React, {useEffect, useState} from "react";
import {ManagedInstanceBox, SelectInstanceBox, TabContainerLayout} from "./style";
import Tab from "../../components/Tab";

const TabContainer = props => {

    const instanceList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [managedInstanceList, setManagedInstanceList] = useState([]);

    useEffect(() => {

    }, [])

    return (<TabContainerLayout>
        <ManagedInstanceBox>
            {managedInstanceList.map(managedInstance => <Tab>{managedInstance}</Tab>)}
        </ManagedInstanceBox>
        <SelectInstanceBox>
            {instanceList.map(instance => <Tab>{instance}</Tab>)}
        </SelectInstanceBox>
    </TabContainerLayout>)
}

export default TabContainer;