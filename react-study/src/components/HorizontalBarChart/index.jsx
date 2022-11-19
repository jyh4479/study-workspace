import React, {useEffect, useRef, useState} from 'react';
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

    const w = 250;
    const h = 150;

    useEffect(() => {

        d3.selectAll("svg > *").remove();

        const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h)
            .style("overflow", "visible");

        const yScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, h])
            .padding(0.5);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", (d, i) => yScale(i))
            .attr("width", d => d.data)
            // .attr("height", yScale.bandwidth()) //--> scale에 따른 chart 너비
            .attr("height", 10)
            .attr("fill", d => "rgb(" + Math.round(d.data * 8) + ",0," + Math.round(d.data * 10) + ")") //Change the color of the bar depending on the valuest

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