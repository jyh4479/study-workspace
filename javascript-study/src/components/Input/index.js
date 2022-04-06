import React, {useState} from "react";

const Input = props => {

    const {parentNumber = 0} = props;

    const [myNumber, setMyNumber] = useState('');

    const onChangeNumber = e => {
        setMyNumber(e.target.value);
    }



    return (
        <>
            <input value={myNumber} onChange={onChangeNumber}/>
            <div>{parentNumber}</div>
        </>
    )
}

export default Input;