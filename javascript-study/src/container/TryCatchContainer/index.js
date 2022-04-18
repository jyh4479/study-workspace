import React, {useState} from 'react';
import {MessageBox, TryCatchContainerLayout} from "./style";

const TryCatchContainer = () => {

    const [errorMessage, setErrorMessage] = useState("지금은 정상");
    const [count, setCount] = useState(0);

    const addCount = () => {
        count < 5 ? setCount(prevCount => prevCount + 1) : throwError("ERROR");
    }

    const throwError = () => {
        try {
            // if (count < 5) {
            //     setCount(prevCount => prevCount + 1);
            // } else {
            //     throwError("에러 던지기");
            // }
            addCount();
        } catch (e) {
            setErrorMessage("에러 잡힘")
        }
    }

    return (
        <TryCatchContainerLayout>
            <MessageBox onClick={() => throwError()}>{errorMessage}</MessageBox>
        </TryCatchContainerLayout>
    );
};

export default TryCatchContainer;