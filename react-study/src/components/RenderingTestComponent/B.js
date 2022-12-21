import React, {useState} from 'react';

const B = (props) => {

    const {parentSetCount} = props;
    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{width: "100px", height: "100px", background: "red"}}> {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>클릭</button>
            <button onClick={() => parentSetCount(count)}>부모한테줘</button>
        </>
    )
}

export default B;