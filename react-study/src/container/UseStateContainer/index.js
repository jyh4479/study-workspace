import React, {useState} from "react";
import {NumberButton, NumberView, UseStateContainerLayout} from "./style";

// useState를 정말 많이 쓰지만 제대로 모르고 쓰는것에 대한 학습
// 안좋은 사용방법, 기존 사용하던 this 없이 어떻게 타겟하여 사용되는지 (js의 메모리 셀 등)
const useStateContainer = props => {

    const [counter, setCounter] = useState(0);

    // 상태를 업데이트하는데 좋지 않은 방법
    // return (
    //     <UseStateContainerLayout>
    //         <NumberView>{counter}</NumberView>
    //         <NumberButton onClick={() => {
    //             setCounter(counter - 1);
    //         }}>-</NumberButton>
    //         <NumberButton onClick={() => {
    //             setCounter(counter + 1);
    //         }}>+</NumberButton>
    //     </UseStateContainerLayout>
    // )

    // 상태를 업데이트하는데 추천되는 방법 --> 왜? 동작이 어떻게 되는거지..?
    // 비동기적으로 state가 업데이트 되기때문에 아래와 같은 형태의 업데이트를 추천한다.
    //https://stackoverflow.com/questions/57828368/why-react-usestate-with-functional-update-form-is-needed
    // ex 1)
    // return (
    //     <UseStateContainerLayout>
    //         <NumberView>{counter}</NumberView>
    //         <NumberButton onClick={() => {
    //             setCounter((prevCounter) => prevCounter - 1);
    //             setCounter((prevCounter) => prevCounter - 1);
    //         }}>-</NumberButton>
    //         <NumberButton onClick={() => {
    //             setCounter((prevCounter) => prevCounter + 1);
    //         }}>+</NumberButton>
    //     </UseStateContainerLayout>
    // )

    // ex 2)
    // return (
    //     <UseStateContainerLayout>
    //         <NumberView>{counter}</NumberView>
    //         <NumberButton onClick={() => {
    //             setCounter(counter - 1);
    //             setCounter(counter - 1);
    //         }}>-</NumberButton>
    //         <NumberButton onClick={() => {
    //             setCounter((prevCounter) => prevCounter + 1);
    //         }}>+</NumberButton>
    //     </UseStateContainerLayout>
    // )

    return (<UseStateContainerLayout>
        <NumberView>{counter}</NumberView>
        <NumberButton onClick={() => {
            setCounter((prevCounter) => prevCounter - 1);
        }}>-</NumberButton>
        <NumberButton onClick={() => {
            setCounter((prevCounter) => prevCounter + 1);
        }}>+</NumberButton>
    </UseStateContainerLayout>)
}

export default useStateContainer;