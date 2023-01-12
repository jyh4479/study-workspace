import React, {useEffect} from 'react';

const C = (props) => {

    useEffect(() => {
        console.log("난 C");
    }, [])

    return (
        <div style={{width: "200px", height: "100px", background: "blue"}}>
            <div>Child Component C</div>
            <div>Rendering?</div>
        </div>
    )
};

export default C;