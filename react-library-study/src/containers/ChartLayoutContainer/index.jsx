import React, {Profiler, useState} from 'react';
import {ChartJsBarChart} from "../../components/ChartJs";
import {ApexBarChart} from "../../components/ApexChartJs";
import {D3BarChart} from "../../components/D3Chart";

const ChartLayoutContainer = (props) => {

    const dummyArray = new Array(100).fill(false);
    const [eventFlag, setEventFlag] = useState(false);

    const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        // console.log(`id: ${id}`);
        // console.log(`phase: ${phase}`);
        console.log(`actualDuration: ${actualDuration}`);
        // console.log(`baseDuration: ${baseDuration}`);
        // console.log(`startTime: ${startTime}`);
        // console.log(`commitTime: ${commitTime}`);
        // console.log(`interactions: ${interactions}`);
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
            <div style={{width: "100%"}}>
                <button onClick={() => setEventFlag(prev => !prev)}> 데이터 변경 이벤트</button>
            </div>

            <Profiler id="ChartLayout" onRender={onRenderCallback}>
                {/*{dummyArray.map((d, i) => <ApexBarChart key={i} eventFlag={eventFlag}/>)}*/}
                {dummyArray.map((d, i) => <ChartJsBarChart key={i} eventFlag={eventFlag}/>)}
                {/*{dummyArray.map((d, i) => <D3BarChart key={i} eventFlag={eventFlag} id={i}/>)}*/}
            </Profiler>
        </div>

    )
};

export default ChartLayoutContainer;