import React, {useMemo, useState} from 'react';
import B from "./B";
import C from "./C";

const A = (props) => {

    const [count, setCount] = useState(0);

    const notReRender = useMemo(() => <C/>, [])

    return (
        <div style={{
            width: "500px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "orange"
        }}>
            <div>Parent Component</div>
            <div>{`Count: ${count}`}</div>
            <B parentSetCount={setCount}/>
            {notReRender}
        </div>
    )
};

export default A;