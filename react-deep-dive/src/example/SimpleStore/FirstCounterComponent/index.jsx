import {useStore} from "../useStore";
import {counterStore} from "../counterStore";

const FirstCounterComponent = () => {
    const [count, setCount] = useStore(counterStore);

    return (
        <div>
            <span>First Counter!</span>
            <span>{count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default FirstCounterComponent;