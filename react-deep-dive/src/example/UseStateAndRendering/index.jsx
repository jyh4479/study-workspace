import {useState} from "react";

const UseStateAndRendering = () => {
    const [, triggerRender] = useState(true);

    let state = 'hello';

    const handleButtonClick = () => {
        state = 'hi';
        triggerRender(prev => !prev);
    }

    return (
        <>
            <h1>{state}</h1>
            <button onClick={handleButtonClick}>hello</button>
        </>
    )
}

export default UseStateAndRendering;