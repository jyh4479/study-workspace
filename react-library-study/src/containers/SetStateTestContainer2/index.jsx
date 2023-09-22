import React, {useLayoutEffect} from 'react';

const SetStateTestContainer2 = (props) => {

    useLayoutEffect(() => {
        console.log("child")
    }, [])

    return <div>container</div>
}

export default SetStateTestContainer2;