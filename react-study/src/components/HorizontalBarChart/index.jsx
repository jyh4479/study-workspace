import React, {useState, useEffect, useRef} from 'react';
import * as d3 from "d3";
import {CenterBox} from "../common/style";

const HorizontalBarChart = (props) => {

    const ref = useRef();
    const [data, setData] = useState([
        {name: "tibero1", data: 20},
        {name: "tibero2", data: 15},
        {name: "tibero3", data: 17},
        {name: "tibero4", data: 10},
        {name: "tibero5", data: 25}]);


    useEffect(() => {

    }, [])

    return (
        <div>
            <CenterBox>
                <h2>Top 5 Chart Example</h2>
                {/*<button onClick={() => updateData()}>Random Data</button>*/}
            </CenterBox>
            <CenterBox>
                <svg ref={ref}></svg>
            </CenterBox>
        </div>
    )
};

export default HorizontalBarChart;