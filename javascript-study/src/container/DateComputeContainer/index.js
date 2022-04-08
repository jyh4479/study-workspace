import React, {useState} from "react";
import {DateComputeContainerLayout, DateViewer} from "./style";

// 업무중 필요한 날짜 계산 알고리즘에 대한 기록
const DateComputeContainer = props => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [timeUnit, setTimeUnit] = useState("hour");
    const [timeUnitValue, setTimeUnitValue] = useState(0);

    const setStartEndDate = () => {

    }

    return (
        <DateComputeContainerLayout>
            <DateViewer bg={"lightblue"}>{startDate.toString()}</DateViewer>
            <DateViewer bg={"lightyellow"}>{endDate.toString()}</DateViewer>
        </DateComputeContainerLayout>
    )
}

export default DateComputeContainer;