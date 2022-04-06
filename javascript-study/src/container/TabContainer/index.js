import React, {useEffect, useState} from "react";
import {InstanceControlBox, InstanceSelectBox, ManagedInstanceBox, TabContainerLayout} from "./style";
import Tab from "../../components/Tab";

// 업무중 탭 추가, 삭제에 대한 괜찮은 알고리즘을 연구, 개발하는데 목적을 둔다
const TabContainer = props => {

    const instanceList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [managedInstanceList, setManagedInstanceList] = useState([]);

    useEffect(() => {

    }, [])

    const addInstance = instance => {
        setManagedInstanceList([...managedInstanceList, instance])
        console.log(managedInstanceList)
    }

    return (
        <TabContainerLayout>
            <ManagedInstanceBox>
                {managedInstanceList.map(managedInstance => <Tab key={managedInstance}>{managedInstance}</Tab>)}
            </ManagedInstanceBox>
            <InstanceSelectBox>
                {
                    // instanceList.map(instance => <Tab onClick={() => {
                    //     setManagedInstanceList([...managedInstanceList, instance])
                    //     console.log(managedInstanceList)
                    // }} key={instance} animation>{instance}</Tab>)

                    instanceList.map(instance =>
                        <Tab onClick={() => addInstance(instance)} key={instance} animation>{instance}</Tab>)
                }
            </InstanceSelectBox>
            <InstanceControlBox>
                <button>prev</button>
                <button>next</button>
            </InstanceControlBox>
        </TabContainerLayout>
    )
}

export default TabContainer;