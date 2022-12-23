import React, {Profiler, useState} from 'react';
import {ChartJsBarChart} from "../../components/ChartJs";
import {ApexBarChart} from "../../components/ApexChartJs";

const ChartLayoutContainer = (props) => {

    const dummyArray = new Array(10).fill(false);
    const [eventFlag, setEventFlag] = useState(false);

    const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        console.log(actualDuration);
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexWrap: "wrap",
            background: "lightgrey"
        }}>
            <button onClick={() => setEventFlag(prev => !prev)}> 데이터 변경 이벤트</button>
            <Profiler id="ChartLayout" onRender={onRenderCallback}>
                {/*{dummyArray.map((d, i) => <ApexBarChart key={i} eventFlag={eventFlag}/>)}*/}
                {dummyArray.map((d, i) => <ChartJsBarChart key={i} eventFlag={eventFlag}/>)}
            </Profiler>
        </div>
    )
};

export default ChartLayoutContainer;