import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import B from "./B";
import C from "./C";

const A = (props) => {

    const [count, setCount] = useState(0);

    const notReRender = useMemo(() => <C/>, [])

    useLayoutEffect(() => {
        console.log("난 A Layout");
    }, [])

    useEffect(() => {
        console.log("난 A");
    }, [])

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
            <C/>
            <B parentSetCount={setCount}/>
            <C/>
            {/*{notReRender}*/}
        </div>
    )
};

export default A;