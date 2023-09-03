import React, {useEffect, useRef, useState} from "react";
// import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";
import * as d3 from "d3";
import "./index.css";
import {CenterBox} from "../common/style";

//http://www.d3noob.org/2014/02/attributes-in-d3js.html
//https://codepen.io/idan/pen/LYVGxp // aAxis custom
//https://blog.scottlogic.com/2019/05/09/building-a-better-d3-axis.html
const BarChart = (props) => {

    const ref = useRef();
    const [data, setData] = useState([
        {name: "tibero1", data: 20},
        {name: "tibero2", data: 15},
        {name: "tibero3", data: 17},
        {name: "tibero4", data: 10},
        {name: "tibero5", data: 25}]);

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

    const updateData = () => {
        setData(prev => prev.map((d, i) => {
            return {name: `tibero${i + 1}`, data: getRandomData(0, 20)}
        }));
    }

    useEffect(() => {
        const w = 600;
        const h = 250;

        d3.selectAll("svg > *").remove();

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, w])
            .padding(0.05);

        const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h)
            // .attr("viewBox", [0, 0, w, h]) // 이거 뭔지 확인
            .style("overflow", "visible") //--> 이게 있어야 x 축이 보이네?

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(i)) //// position in x-axis, we will pass the values from the dataset
            .attr("y", h) // --> 이거 없으면 차트 반대로 그려짐
            .attr("width", xScale.bandwidth()) //Asks for the bandwith of the scale
            .attr("height", 0)
            .attr("fill", d => "rgb(" + Math.round(d * 8) + ",0," + Math.round(d * 10) + ")") //Change the color of the bar depending on the valuest
        svg.append('g').attr("class", "x-axis");
        svg.append('g').attr("class", "y-axis");
    }, [])

    useEffect(() => {
        const w = 600;
        const h = 250;

        const svg = d3.select(ref.current);

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, w])
            .padding(0.05);

        const yScale = d3.scaleLinear()
            .domain([0, getMaxData()]) //sets the upper end of the input domain to the largest data value in dataset
            .range([h, 0]);

        // axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length).tickFormat(i => data[i].name);

        const yAxis = d3.axisLeft(yScale)
            .ticks(5);


        svg.selectAll("rect")
            .data(data)
            .transition() // <---- Here is the transition
            .duration(1000) // 2 seconds
            .attr("y", d => yScale(d.data))
            .attr("height", d => yScale(0) - yScale(d.data)) // --> range가 반대 방향이라서 Top도 반대로되는듯
            .attr("fill", d => "rgb(" + Math.round(d.data * 8) + ",0," + Math.round(d.data * 10) + ")")

        svg.select(".x-axis")
            .call(xAxis)
            .attr("transform", `translate(0, ${h})`);

        svg.select(".y-axis")
            .call(yAxis)


        svg.select(".x-axis").selectAll(".tick").select("line").remove();

        svg.select(".x-axis").selectAll(".tick")
            .append("rect").attr('y', 6).attr('x', -30).attr("width", 12).attr("height", 12).attr("rx", 2).attr("class", "number-box");

        svg.select(".x-axis").selectAll(".tick")
            .append('text').attr('y', 16).attr('x', -24).attr("fill", "#ffffff").text((d, i) => i + 1);


    }, [data])

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