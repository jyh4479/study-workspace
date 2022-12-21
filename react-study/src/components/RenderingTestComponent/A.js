import React, {useState} from 'react';
import B from "./B";
import C from "./C";

const A = (props) => {

    const [count, setCount] = useState(0);

    return (
        <div style={{
            width: "500px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "grey"
        }}>
            {count}
            <B parentSetCount={setCount}/>
            <C/>
        </div>
    )
};

export default A;