import {useEffect, useState} from "react";

export const useStore = (store) => {
    const [state, setState] = useState(() => store.get());

    useEffect(() => {
        return store.subscribe(() => {
            setState(store.get());
        });
    }, [store])

    return [state, store.set];
}