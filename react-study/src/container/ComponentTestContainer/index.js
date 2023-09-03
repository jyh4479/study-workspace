import React from 'react';
import {ContainerLayout} from "./style";
import TextBox from "../../components/TextBox";

const ComponentTestContainer = (props) => {

    // const spellView = spellList.map(data=>)

    return (
        <ContainerLayout>
            <TextBox type={"champion"}/>
            <TextBox type={"spell"}/>
            <TextBox type={"spell"}/>
        </ContainerLayout>
    )
};

export default ComponentTestContainer;