import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import {getRandomIntNumber, getRandomNumber} from "../../../utils/number";

const BarChart = props => {

    const {eventFlag} = props;

    const dummyArray = new Array(100).fill(true);
    const [data, setData] = useState(dummyArray.map(() => getRandomIntNumber(0, 100)));
    const [categories, setCategories] = useState(dummyArray.map((d, i) => i));

    useEffect(() => {
        setData(dummyArray.map(() => getRandomNumber(0, 100)));
    }, [eventFlag])

    const series = [{
        data: data
    }]

    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: categories
        }
    };

    return (
        <div style={{width: "500px", height: "350px"}}>
            <ReactApexChart options={options} series={series} type="bar"/>;
        </div>
    )
}

export default BarChart;