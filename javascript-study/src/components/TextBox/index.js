import React from 'react';
import {champion, spell} from "./style";

const TextBox = (props) => {

    const {param, type} = props

    return (
        <div>
            {type === "spell" ? <spell/> : <champion/>}
        </div>
    )
};

export default TextBox;