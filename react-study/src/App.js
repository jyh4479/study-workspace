import './App.css';
import ChartLayoutContainer from "./containers/ChartLayoutContainer";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

function App() {
    return (
        <div className="App">
            <ChartLayoutContainer/>
        </div>
    );
}

export default App;

// id, // 방금 커밋된 Profiler 트리의 "id"
//     phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
//     actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
//     baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
//     startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
//     commitTime, // React가 해당 업데이트를 언제 커밋했는지
//     interactions // 이 업데이트에 해당하는 상호작용들의 집합
