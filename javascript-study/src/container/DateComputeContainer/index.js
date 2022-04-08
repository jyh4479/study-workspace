import React, {useState} from "react";
import {DateComputeContainerLayout, DateComputedContainer, DateComputedViewer, DateViewer} from "./style";

// 업무중 필요한 날짜 계산 알고리즘에 대한 기록
const DateComputeContainer = props => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [timeUnit, setTimeUnit] = useState("hour");
    const [timeUnitValue, setTimeUnitValue] = useState(0);

    const setStartEndDate = () => {
        startDate.setDate(startDate.getDate() - 3);
    }

    const computeDate = () => {
        const result = [];
        const curDate = new Date(startDate);


        while (curDate <= endDate) {
            result.push(
                <DateComputedViewer>

                </DateComputedViewer>
            )
        }

        return result;
    }

    setStartEndDate();
    return (
        <DateComputeContainerLayout>
            <DateViewer bg={"lightblue"}>{startDate.toString()}</DateViewer>
            <DateViewer bg={"lightyellow"}>{endDate.toString()}</DateViewer>

            <DateComputedContainer>
                {computeDate()}
            </DateComputedContainer>

        </DateComputeContainerLayout>
    )
}

export default DateComputeContainer;