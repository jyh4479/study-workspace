import React, {useEffect, useLayoutEffect, useState} from 'react';

const SetStateTestContainer = (props) => {

    const [functionTest, set] = useState(console.log(123));
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        console.log(456);
    }, [])

    useEffect(() => {
        console.log("count 증가 실행");
        // setCount(prev => 2);
        // setTimeout(() => setCount(prev => 1));
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }, [])

    useEffect(() => {
        console.log(count);
    }, [count])

    return <div>{props.children}</div>
}

export default SetStateTestContainer;