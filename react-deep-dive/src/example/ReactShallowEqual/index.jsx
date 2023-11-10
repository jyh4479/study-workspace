import {memo, useEffect, useState} from "react";

const Component = memo((props) => {

    const {counter} = props;

    useEffect(() => {
        console.log("Component has been rendered!");
    })

    return <h1>{counter}</h1>;
})

const DeeperComponent = memo((props) => {

    const {counter} = props;

    useEffect(() => {
        console.log("DeeperComponent has been rendered!");
    })

    return <h1>{counter.counter}</h1>;
})

const ReactShallowEqual = () => {
    const [, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <div>
            <Component counter={100}/>
            <DeeperComponent counter={{counter: 100}}/>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default ReactShallowEqual;