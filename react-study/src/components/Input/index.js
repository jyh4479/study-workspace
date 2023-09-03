import React, {useCallback, useState} from "react";

const Input = props => {

    const {parentNumber = 0} = props;

    const [myNumber, setMyNumber] = useState('');

    const onChangeNumber = e => {
        setMyNumber(e.target.value);
    }

    const onCreateTestFunction = useCallback(e => {
        console.log("함수 생성");
        console.log(e.target.innerText);
    }, [])

    return (
        <>
            <input value={myNumber} onChange={onChangeNumber}/>
            <div onClick={onCreateTestFunction}>{parentNumber}</div>
        </>
    )
}

export default Input;