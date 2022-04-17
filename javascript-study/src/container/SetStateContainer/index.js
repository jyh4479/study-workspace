import React, {useState, useEffect} from 'react';
import {SetStateContainerLayout} from "./style";
import AddNumberContainer from "./AddNumberContainer";

const SetStateContainer = props => {

    const [addNumber, setAddNumber] = useState(0);
    const [confirm, setConfirm] = useState(false);

    return (
        <SetStateContainerLayout>
            <AddNumberContainer
                addNumber={addNumber}
                setAddNumber={setAddNumber}
                confirm={confirm}
                addValue={1}
            />
            <AddNumberContainer
                addNumber={addNumber}
                setAddNumber={setAddNumber}
                confirm={confirm}
                addValue={2}
            />
            <AddNumberContainer
                addNumber={addNumber}
                setAddNumber={setAddNumber}
                confirm={confirm}
                addValue={3}
            />
            <button onClick={() => {
                setConfirm(prevConfirm => !prevConfirm)
            }}>Confirm
            </button>
        </SetStateContainerLayout>
    );
};

export default SetStateContainer;