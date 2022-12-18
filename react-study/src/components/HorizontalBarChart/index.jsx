import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {CenterBox} from "../common/style";
import "./index.css";

const HorizontalBarChart = (props) => {

    const ref = useRef();

    const [data, setData] = useState([
        {name: "tibero1", data: 20},
        {name: "tibero2", data: 15},
        {name: "tibero3", data: 17},
        {name: "tibero4", data: 10},
        {name: "tibero5", data: 25}
    ]);

    const w = 250;
    const h = 150;
    const padding = 0.5;
    const colors = ["#1565C0", "#1E88E5", "#42A5F5", "#90CAF9", "#BBDEFB"];

    const getMaxData = () => {
        let value = 0;
        data.forEach(val => {
            value = Math.max(val.data, value);
        })
        return value;
    }

    const getRandomData = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //실제로는 props로 전달되는 데이터가 변경됨
    const updateData = () => {
        setData(prev => prev.map((d, i) => {
            return {name: `tibero${i + 1}`, data: getRandomData(0, 20)}
        }));
    }

    useEffect(() => {

        d3.selectAll("svg > *").remove();

        const svg = d3.select(ref.current)
            .attr("width", w).attr("height", h)
            .style("overflow", "visible");

        const yScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, h])
            .padding(padding);

        const xScale = d3.scaleLinear()
            .domain([0, getMaxData()])
            .range([0, h]);

        const yAxis = d3.axisLeft(yScale)
            .ticks(data.length).tickFormat(i => data[i].name);

        const xAxis = d3.axisBottom(xScale)
            .tickSize(-h)
            .ticks(5);

        // D3, SVG는 z-index가 따로 없음 먼저 그려지는것 순서로 z-index의 우선순위가 낮아짐
        // g를 먼저 넣어주는건 line 위에 bar chart가 그려지게 하기위함
        svg.append('g').attr("class", "x-axis");
        svg.append('g').attr("class", "y-axis-left");
        svg.append('g').attr("class", "y-axis-right");

        svg.select(".y-axis-left")
            .call(yAxis)

        svg.select(".x-axis")
            .call(xAxis)
            .attr("transform", `translate(0, ${h})`)
            .selectAll("text")
        // .attr("fill", "#B5B5B5")

        svg.select(".y-axis-left").select("path").remove();
        svg.select(".y-axis-left").selectAll(".tick").select("line").remove();
        svg.select(".x-axis").select("path").remove();

        svg.select(".y-axis-left")
            .selectAll(".tick")
            .append("rect")
            .attr('y', -6.5).attr('x', -54)
            .attr("width", 12).attr("height", 12)
            .attr("rx", 2).attr("class", "number-box");

        svg.select(".y-axis-left")
            .selectAll(".tick")
            .append('text')
            .attr('y', 3).attr('x', -48)
            .attr("class", "number-box-text")
            .text((d, i) => i + 1);

        svg.selectAll(".data-bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "data-bar")
            .attr("x", 0)
            .attr("y", (d, i) => yScale(i))
            .attr("width", d => 0)
            // .attr("height", yScale.bandwidth()) //--> scale에 따른 chart 너비
            .attr("height", 10)

    }, [data.length])

    useEffect(() => {

        const svg = d3.select(ref.current);

        const xScale = d3.scaleLinear()
            .domain([0, getMaxData()])
            .range([0, h]);

        const yRightScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, h])
            .padding(padding);

        const xAxis = d3.axisBottom(xScale)
            .tickSize(-h)
            .ticks(5);

        const yAxisRight = d3.axisRight(yRightScale)
            .ticks(data.length).tickFormat(i => `${data[i].data} %`);

        svg.selectAll(".data-bar")
            .data(data)
            .transition()
            .duration(1000)
            .attr("x", 0)
            .attr("width", d => xScale(d.data))
            .attr("fill", (d, i) => colors[i])
        // .attr("fill", d => "rgb(" + Math.round(d.data * 8) + ",0," + Math.round(d.data * 10) + ")")

        svg.select(".x-axis")
            .call(xAxis)
            .selectAll("line")
            .attr("stroke", "#DFE5EB")
        svg.select(".x-axis")
            .selectAll("text")
            .attr("fill", "#B5B5B5")

        svg.select(".x-axis").select("path").remove();

        svg.select(".y-axis-right")
            .call(yAxisRight)
            .attr("transform", `translate(${w - 90}, 0)`)
            .selectAll("text")
            .attr("fill", "#2979FF")

        svg.select(".y-axis-right").select("path").remove();
        svg.select(".y-axis-right").selectAll("line").remove();

    }, [data])

    return (<div>
        <CenterBox>
            <h2>Top 5 Chart Example</h2>
            <button onClick={() => updateData()}>Random Data</button>
        </CenterBox>
        <CenterBox>
            <svg ref={ref}></svg>
        </CenterBox>
    </div>)
};

export default HorizontalBarChart;