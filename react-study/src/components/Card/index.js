import React, {useEffect} from "react";

const Card = props => {

    const {content} = props;

    useEffect(() => {
        return (() => {
            console.log(`page exit ${content}`);
        })
    }, [])

    return (
        <div>
            {content}
        </div>
    )
}

export default Card;