import React, {useEffect, useState} from 'react';
import {Bar} from "react-chartjs-2";
import {getRandomIntNumber, getRandomNumber} from "../../../utils/number";


const BarChart = (props) => {

    const {eventFlag} = props;

    const dummyArray = new Array(100).fill(true);
    const [chartData, setChartData] = useState(dummyArray.map(() => getRandomIntNumber(0, 100)));
    const [labels, setLabels] = useState(dummyArray.map((d, i) => i));

    useEffect(() => {
        setChartData(dummyArray.map(() => getRandomNumber(0, 100)));
    }, [eventFlag])

    const data = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: chartData,
            borderWidth: 1
        }]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <div style={{width: "500px", height: "350px"}}>
            <Bar data={data} options={options} type={"bar"}/>
        </div>
    )
};

export default BarChart;