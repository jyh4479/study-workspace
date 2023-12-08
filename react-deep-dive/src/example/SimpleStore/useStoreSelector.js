import {useEffect, useState} from "react";

export const useStoreSelector = (store, selector) => {
    const [state, setState] = useState(() => selector(store.get()));

    useEffect(() => {
        return store.subscribe(() => {
            const value = selector(store.get());
            setState(value);
        })
    }, [store, selector]);

    return state;
}