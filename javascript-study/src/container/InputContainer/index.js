import React, {useCallback, useMemo, useState} from "react";
import {InputContainerLayout} from "./style";
import Input from "../../components/Input"

// 업무중 Input 내부 내용이 특정 event 없이 수정되는 동작에 의해 rendering되는 문제가 있었다.
// useMemo를 이해하고 rendering을 필요한 순간만 하도록 연구, 개발하는데 목적을 둔다.
const InputContainer = props => {

    const [number, setNumber] = useState('');

    const onChangeNumber = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const addNumber = useCallback(e => {
        alert(Number(number) + 1);
    }, [number])

    const buttonView = useMemo(() => {
        return (
            <button onClick={e => addNumber(e)}>event</button>
        )
    }, [addNumber])


    useMemo(() => {
        return <Input/>
    }, [])
    return (
        <InputContainerLayout>
            <input value={number} onChange={onChangeNumber}/>
            {buttonView}
            <Input/>
            {
                useMemo(() => <Input/>, [])
            }
        </InputContainerLayout>
    )
}

export default InputContainer;