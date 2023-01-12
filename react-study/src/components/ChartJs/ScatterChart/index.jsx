import React, {useRef, useState} from 'react';
import {Chart as CommonChart} from "react-chartjs-2";
import {getRandomIntNumber} from "../../../utils/number";
import {getChartFillColor} from "../utils";

const ScatterChart = (props) => {

    const {colors = ["#00F0F0"]} = props;
    const chartRef = useRef(null);

    const dummyArray = new Array(5).fill(true);
    const [chartData, setChartData] = useState(dummyArray.map((d, i) => {
        return {x: i, y: getRandomIntNumber(0, 100)}
    }));
    const [labels, setLabels] = useState(dummyArray.map((d, i) => i));

    const data = {
        // 종합적 data 정보
        datasets: [{
            // label: 1, // data에 {x:, y:} 형태로도 표현할 수 있음
            data: chartData, // Line chart인 경우 line의 굵기 정의
            borderWidth: 1,
            fill: true,
            backgroundColor: colors.map(color => getChartFillColor(color)),
            borderColor: colors
        }]
    }

    const options = {
        plugins: {
            zoom: {
                zoom: {
                    drag: {
                        // threshold: 800,
                        enabled: true // SET SCROOL ZOOM TO TRUE
                    },
                    onZoomComplete: ({chart}) => {
                        if (chart.getZoomLevel() === 1) return;

                        const minX = chart.scales.x.min;
                        const maxX = chart.scales.x.max;

                        const minY = chart.scales.y.min;
                        const maxY = chart.scales.y.max;

                        console.log(minX, maxX);
                        console.log(minY, maxY);

                        chart.resetZoom();
                    }
                },
                limits: {
                    minRange: 100
                }
            },
            tooltip: {
                callbacks: {
                    title: function () {
                        return "Tooltip Title";
                    }
                },
                mode: 'index', intersect: false
            },
            legend: {display: false}, title: {
                display: true, text: "Test chart", position: "left"
            },
            hover: {
                mode: 'index', intersect: false
            }
        },

        scales: {
            x: {
                // type: 'category',
                labels: labels
            },
            y: {
                beginAtZero: true
            }
        },
    }

    return (
        <div style={{width: "500px", height: "350px"}}>
            <CommonChart ref={chartRef} data={data} options={options} type={"scatter"}/>
        </div>
    )
};

export default ScatterChart;