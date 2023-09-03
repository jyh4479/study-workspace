import React from 'react';
import {TimeStampTestContainerLayout} from "./style";

const TimeStampTestContainer = () => {

    const timeTest = new Date();

    return (
        <TimeStampTestContainerLayout>
            <div>{timeTest.getTime()}</div>
            <div>{timeTest.toTimeString()}</div>
        </TimeStampTestContainerLayout>
    )
}

export default TimeStampTestContainer;