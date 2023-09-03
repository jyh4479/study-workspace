import React, {useState} from "react";
import {DateComputeContainerLayout, DateComputedContainer, DateComputedViewer, DateViewer} from "./style";

// 업무중 필요한 날짜 계산 알고리즘에 대한 기록
const DateComputeContainer = props => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [timeUnit, setTimeUnit] = useState("hour");
    const [timeUnitValue, setTimeUnitValue] = useState(1);

    const setStartEndDate = () => {
        startDate.setDate(startDate.getDate() - 3);
    }

    const computeDetailDate = curDate => {
        const result = [];
        const startOneDate = new Date(curDate);
        const endOneDate = new Date(curDate);

        // 1일만 slice
        if (startDate.getUTCFullYear() === endDate.getUTCFullYear() && startDate.getUTCMonth() === endDate.getUTCMonth() && startDate.getUTCDate() === endDate.getUTCDate()) {
            startOneDate.setHours(startDate.getHours());
            endOneDate.setHours(endDate.getHours());

            // 2일 이상 slice
        } else {
            if (startOneDate.getUTCFullYear() === startDate.getUTCFullYear() && startOneDate.getUTCMonth() === startDate.getUTCMonth() && startOneDate.getUTCDate() === startDate.getUTCDate()) {
                startOneDate.setHours(startDate.getHours());
                endOneDate.setHours(23);
            } else if (startOneDate.getUTCFullYear() === endDate.getUTCFullYear() && startOneDate.getUTCMonth() === endDate.getUTCMonth() && startOneDate.getUTCDate() === endDate.getUTCDate()) {
                startOneDate.setHours(0);
                endOneDate.setHours(endDate.getHours());
            } else {
                startOneDate.setHours(0);
                endOneDate.setHours(23);
            }
        }

        const curOneDate = startOneDate;
        while (curOneDate <= endOneDate) {
            result.push(
                <DateComputedViewer bg={"lightgreen"}>
                    {curOneDate.getUTCFullYear()}-{curOneDate.getUTCMonth()}-{curOneDate.getUTCMonth()} {curOneDate.getUTCHours()}:{curOneDate.getUTCMinutes()}
                </DateComputedViewer>
            );
            curOneDate.setHours(curOneDate.getHours() + timeUnitValue);
        }

        return result;
    }

    const computeDate = () => {
        const result = [];
        const curDate = new Date(startDate);

        // 1일씩 증가
        while (curDate <= endDate) {
            result.push(
                computeDetailDate(curDate)
            );

            curDate.setDate(curDate.getDate() + 1);
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