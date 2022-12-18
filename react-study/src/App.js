import './App.css';
import BarChart from "./components/BarChart";
import BarChartRange from "./components/BarChartRange";
import HorizontalBarChart from "./components/HorizontalBarChart";
import {MenuList} from "./components/CompoundPattern";

function App() {
    return (
        <div className="App">

            {/*<Carousel/>*/}
            {/*<BarChart/>*/}

            {/* current testing */}
            {/*<HorizontalBarChart/>*/}
            {/*<BarChartRange/>*/}

            <MenuList>
                <MenuList.MainMenu/>
                <MenuList.SubMenu/>
            </MenuList>

        </div>
    );
}

export default App;
