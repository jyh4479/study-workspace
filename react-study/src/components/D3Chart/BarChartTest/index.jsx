import React, {useEffect, useState} from "react";
import BarChart from "../../HorizontalBarChart";
import {getRandomIntNumber} from "../../../utils/number";

const BarChartTest = (props) => {

    const {eventFlag, id} = props;

    const dummyArray = new Array(20).fill(true);
    const [chartData, setChartData] = useState(dummyArray.map((d, i) => {
        return {name: i, data: getRandomIntNumber(0, 100)};
    }));

    useEffect(() => {
        setChartData(dummyArray.map((d, i) => {
            return {name: i, data: getRandomIntNumber(0, 100)};
        }));
    }, [eventFlag])

    return (
        <div style={{width: "500px", height: "350px"}}>
            <BarChart data={chartData} id={id}/>
        </div>
    )
};

export default BarChartTest;