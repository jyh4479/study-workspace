import React, {useEffect} from 'react';
import {AddNumberContainerLayout} from "./style";

const AddNumberContainer = props => {

    const {addNumber, setAddNumber, confirm, addValue} = props;

    useEffect(() => {
        // --> 6 증가
        setAddNumber(prevAddNumber => prevAddNumber + addValue);
        // --> 3 증가
        // setAddNumber(addNumber + addValue);
    }, [addValue, confirm, setAddNumber])

    return (
        <AddNumberContainerLayout>
            {addNumber}
        </AddNumberContainerLayout>
    );
};

export default AddNumberContainer;