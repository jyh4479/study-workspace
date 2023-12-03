import {useStore} from "../useStore";
import {counterStore} from "../counterStore";

const SecondCounterComponent = () => {
    const [count, setCount] = useStore(counterStore);

    return (
        <div>
            <span>Second Counter!</span>
            <span>{count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default SecondCounterComponent;
