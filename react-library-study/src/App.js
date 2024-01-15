import './App.css';

import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import {BarChart} from "./components/NivoChart";
// import boxselectPlugin from "chartjs-plugin-boxselect";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler, zoomPlugin);

function App() {
    return (
        <div className="App">x
            {/*<PhoneNumberInput/>*/}
            <BarChart data={[
                {
                    "country": "AD",
                    "hot dog": 39,
                    "hot dogColor": "hsl(98, 70%, 50%)",
                    "burger": 189,
                    "burgerColor": "hsl(264, 70%, 50%)",
                    "sandwich": 128,
                    "sandwichColor": "hsl(2, 70%, 50%)",
                    "kebab": 153,
                    "kebabColor": "hsl(14, 70%, 50%)",
                    "fries": 31,
                    "friesColor": "hsl(70, 70%, 50%)",
                    "donut": 135,
                    "donutColor": "hsl(101, 70%, 50%)"
                },
                {
                    "country": "AE",
                    "hot dog": 149,
                    "hot dogColor": "hsl(193, 70%, 50%)",
                    "burger": 35,
                    "burgerColor": "hsl(67, 70%, 50%)",
                    "sandwich": 173,
                    "sandwichColor": "hsl(35, 70%, 50%)",
                    "kebab": 60,
                    "kebabColor": "hsl(68, 70%, 50%)",
                    "fries": 194,
                    "friesColor": "hsl(330, 70%, 50%)",
                    "donut": 172,
                    "donutColor": "hsl(330, 70%, 50%)"
                },
                {
                    "country": "AF",
                    "hot dog": 136,
                    "hot dogColor": "hsl(310, 70%, 50%)",
                    "burger": 182,
                    "burgerColor": "hsl(285, 70%, 50%)",
                    "sandwich": 141,
                    "sandwichColor": "hsl(345, 70%, 50%)",
                    "kebab": 53,
                    "kebabColor": "hsl(8, 70%, 50%)",
                    "fries": 99,
                    "friesColor": "hsl(86, 70%, 50%)",
                    "donut": 167,
                    "donutColor": "hsl(167, 70%, 50%)"
                },
                {
                    "country": "AG",
                    "hot dog": 174,
                    "hot dogColor": "hsl(46, 70%, 50%)",
                    "burger": 64,
                    "burgerColor": "hsl(200, 70%, 50%)",
                    "sandwich": 41,
                    "sandwichColor": "hsl(97, 70%, 50%)",
                    "kebab": 161,
                    "kebabColor": "hsl(162, 70%, 50%)",
                    "fries": 125,
                    "friesColor": "hsl(78, 70%, 50%)",
                    "donut": 56,
                    "donutColor": "hsl(69, 70%, 50%)"
                },
                {
                    "country": "AI",
                    "hot dog": 6,
                    "hot dogColor": "hsl(340, 70%, 50%)",
                    "burger": 172,
                    "burgerColor": "hsl(205, 70%, 50%)",
                    "sandwich": 100,
                    "sandwichColor": "hsl(188, 70%, 50%)",
                    "kebab": 200,
                    "kebabColor": "hsl(304, 70%, 50%)",
                    "fries": 183,
                    "friesColor": "hsl(97, 70%, 50%)",
                    "donut": 179,
                    "donutColor": "hsl(200, 70%, 50%)"
                },
                {
                    "country": "AL",
                    "hot dog": 22,
                    "hot dogColor": "hsl(319, 70%, 50%)",
                    "burger": 127,
                    "burgerColor": "hsl(344, 70%, 50%)",
                    "sandwich": 99,
                    "sandwichColor": "hsl(104, 70%, 50%)",
                    "kebab": 5,
                    "kebabColor": "hsl(98, 70%, 50%)",
                    "fries": 27,
                    "friesColor": "hsl(72, 70%, 50%)",
                    "donut": 86,
                    "donutColor": "hsl(337, 70%, 50%)"
                },
                {
                    "country": "AM",
                    "hot dog": 96,
                    "hot dogColor": "hsl(325, 70%, 50%)",
                    "burger": 106,
                    "burgerColor": "hsl(269, 70%, 50%)",
                    "sandwich": 103,
                    "sandwichColor": "hsl(116, 70%, 50%)",
                    "kebab": 63,
                    "kebabColor": "hsl(98, 70%, 50%)",
                    "fries": 76,
                    "friesColor": "hsl(198, 70%, 50%)",
                    "donut": 143,
                    "donutColor": "hsl(9, 70%, 50%)"
                }
            ]}/>
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
