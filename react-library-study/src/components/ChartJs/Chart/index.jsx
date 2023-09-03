import React, {useState} from 'react';
import {Chart as CommonChart} from "react-chartjs-2";
import {getRandomIntNumber, getYaxisNumericFormat} from "../../../utils/number";
import {getChartFillColor} from "../utils";

const Chart = (props) => {

    const {type = 'bar', colors = ["#00F0F0"]} = props;

    const dummyArray = new Array(5).fill(true);
    const [chartData, setChartData] = useState(dummyArray.map((d, i) => {
        return {x: i, y: getRandomIntNumber(0, 1000000000)}
    }));
    const [labels, setLabels] = useState(dummyArray.map((d, i) => i));

    const data = {
        // x축에 대한 data 정보
        labels: labels, // instanceId or time

        // 종합적 data 정보
        datasets: [{
            // label: 1, // data에 {x:, y:} 형태로도 표현할 수 있음
            data: chartData,
            // Line chart인 경우 line의 굵기 정의
            borderWidth: 1,
            fill: true,
            backgroundColor: colors.map(color => getChartFillColor(color)),
            borderColor: colors
        }]
    }

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return "Tooltip Title";
                    }
                },
                mode: 'index', // stack 같은경우 다중으로 지표를 보여줄지 말지에 대한 옵션
                intersect: false
            },
            legend: {display: false},
            title: {
                display: true,
                text: "Test chart",
                position: "left"
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: (label, index, labels) => {
                        return getYaxisNumericFormat(label);
                    }
                },
                beginAtZero: true
            }
        },
        interaction: {
            mode: 'point'
        },
        onClick: (event, elements, config) => {

            console.log(config.tooltip.dataPoints[0].dataIndex)

            // console.log(event)
            //
            // console.log(elements);
            // console.log(elements[0].index);

            // const chart = elements[0]._chart;
            // const element = chart.getElementAtEvent(event)[0];
            // const dataset = chart.data.datasets[element._datasetIndex];
            // const xLabel = chart.data.labels[element._index];
            // const value = dataset.data[element._index];
            // console.log(dataset.label + " at " + xLabel + ": " + value);
        }
    }

    return (
        <div style={{width: "500px", height: "350px"}}>
            <CommonChart data={data} options={options} type={type}/>
        </div>
    )
};

export default Chart;