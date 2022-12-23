import React, {useState} from 'react';

const B = (props) => {

    const {parentSetCount} = props;
    const [count, setCount] = useState(0);

    return (
        <div style={{width: "200px", height: "100px", background: "red"}}>
            <div>Child Component B</div>
            <div> {`Count: ${count}`}</div>
            <button onClick={() => setCount(prev => prev + 1)}>증가</button>
            <button onClick={() => parentSetCount(count)}>부모에 값 전달</button>
        </div>
    )
}

export default B;