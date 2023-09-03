import React, {useEffect, useRef, useState} from "react";
// import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";
import * as d3 from "d3";
import {CenterBox} from "../common/style";

//http://www.d3noob.org/2014/02/attributes-in-d3js.html
const BarChartRange = (props) => {

    const ref = useRef();
    const [data, setData] = useState([11, 19, 22, 9, 6, 23, 10, 11, 12, 20, 9, 11, 12, 17, 14, 17, 8, 15, 5, 9]);

    useEffect(() => {

        // svg set up
        const w = 400;
        const h = 300;
        const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h)
            .style("overflow", "visible")
            .style("margin-top", "75px")
            .style("background", "lightblue");

        d3.selectAll("svg > *").remove();

        // scaling
        const xScale = d3.scaleBand()
            .domain(data.map((val, i) => i))
            .range([0, w])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);

        // axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);

        svg.append('g')
            .call(xAxis)
            .attr("transform", `translate(0, ${h})`);
        svg.append('g')
            .call(yAxis);

        // svg data

        console.log(data)

        svg.selectAll('.bar')
            .data(data)
            .join("rect")
            .attr('x', (v, i) => xScale(i))
            .attr('y', yScale)
            .attr("width", xScale.bandwidth())
            .attr("height", val => 0)
            .transition()
            .duration(500)
            .attr('y', d => yScale(d))
            .attr("height", d => h - yScale(d));

    }, [data])

    return (<div>
        <CenterBox>
            <h2>Top 5 Chart Example</h2>
            {/*<button onClick={() => updateData()}>Random Data</button>*/}
        </CenterBox>
        <CenterBox>
            <svg ref={ref}></svg>
        </CenterBox>
    </div>)
};

export default BarChartRange;