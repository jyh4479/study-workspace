import React, {useEffect, useRef, useState} from "react";
// import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";
import * as d3 from "d3";
import {CenterBox} from "../common/style";

const BarChart = (props) => {

    const ref = useRef();
    const [data, setData] = useState([11, 19, 22, 9, 6, 23, 10, 11, 12, 20, 9, 11, 12, 17, 14, 17, 8, 15, 5, 9]);

    const getRandomData = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const updateData = () => {
        setData(prev => prev.map(d => getRandomData(0, 20)));
    }

    useEffect(() => {
        const w = 600;
        const h = 250;

        const svg = d3.select(ref.current);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)]) //sets the upper end of the input domain to the largest data value in dataset
            .range([0, h]);

        svg.selectAll("rect")
            .data(data)
            .transition() // <---- Here is the transition
            .duration(2000) // 2 seconds
            .attr("y", function (d) {
                return h - yScale(d);
            })
            .attr("height", function (d) {
                return yScale(d);
            })
            .attr("fill", function (d) {
                return "rgb(" + Math.round(d * 8) + ",0," + Math.round(d * 10) + ")";
            });
    }, [data])

    useEffect(() => {
        const w = 600;
        const h = 250;

        d3.selectAll("svg > *").remove();

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .rangeRound([0, w])
            .paddingInner(0.05);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)]) //sets the upper end of the input domain to the largest data value in dataset
            .range([0, h]);

        const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d, i) { // position in x-axis
                return xScale(i); // we will pass the values from the dataset
            })
            .attr("y", function (d) {
                return h - yScale(d);
            })
            .attr("width", xScale.bandwidth()) //Asks for the bandwith of the scale
            .attr("height", function (d) {
                return yScale(d);
            })
            .attr("fill", function (d) {
                return "rgb(" + Math.round(d * 8) + ",0," + Math.round(d * 10) + ")"; //Change the color of the bar depending on the value
            });

    }, [])

    // useEffect(() => {
    //
    //     // svg set up
    //     const w = 400;
    //     const h = 300;
    //     const svg = d3.select(ref.current)
    //         .attr("width", w)
    //         .attr("height", h)
    //         .style("overflow", "visible")
    //         .style("margin-top", "75px")
    //         .style("background", "lightblue");
    //
    //     d3.selectAll("svg > *").remove();
    //
    //     // scaling
    //     const xScale = d3.scaleBand()
    //         .domain(data.map((val, i) => i))
    //         .range([0, w])
    //         .padding(0.5);
    //
    //     const yScale = d3.scaleLinear()
    //         .domain([0, h])
    //         .range([h, 0]);
    //
    //     // axes
    //     const xAxis = d3.axisBottom(xScale)
    //         .ticks(data.length);
    //     const yAxis = d3.axisLeft(yScale)
    //         .ticks(5);
    //
    //     svg.append('g')
    //         .call(xAxis)
    //         .attr("transform", `translate(0, ${h})`);
    //     svg.append('g')
    //         .call(yAxis);
    //
    //     // svg data
    //
    //     console.log(data)
    //
    //     svg.selectAll('.bar')
    //         .data(data)
    //         .join("rect")
    //         .attr('x', (v, i) => xScale(i))
    //         .attr('y', yScale)
    //         .attr("width", xScale.bandwidth())
    //         .attr("height", val => 0)
    //         .transition()
    //         .duration(500)
    //         .attr('y', d => yScale(d))
    //         .attr("height", d => h - yScale(d));
    //
    // }, [data])

    return (
        <div>
            <CenterBox>
                <h2>Top 5 Chart Example</h2>
                <button onClick={() => updateData()}>Random Data</button>
            </CenterBox>
            <CenterBox>
                <svg ref={ref}></svg>
            </CenterBox>
        </div>
    )
};

export default BarChart;