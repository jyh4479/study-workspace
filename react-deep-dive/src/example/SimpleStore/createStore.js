export const createStore = (initialState) => {
    let state = typeof initialState !== 'function' ? initialState : initialState();

    const callbacks = new Set();
    const get = () => state;
    const set = (nextState) => {
        state = typeof nextState === 'function' ? nextState(state) : nextState;
        callbacks.forEach(callback => callback());

        return state;
    }
    const subscribe = (callback) => {
        callbacks.add(callback);

        return () => {
            callbacks.delete(callback);
        }
    }

    return {get, set, subscribe};
}