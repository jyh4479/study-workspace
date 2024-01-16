// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import {ResponsiveBar} from '@nivo/bar'
import {useEffect, useState} from "react";
import {getRandomIntNumber, getRandomNumber} from "../../../utils/number";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = (props) => {

    const {eventFlag} = props;

    const dummyArray = new Array(50).fill(true);
    const [chartData, setChartData] = useState(dummyArray.map(() => {
        return {"test": getRandomIntNumber(0, 100)};
    }));

    useEffect(() => {
        setChartData(dummyArray.map(() => {
            return {"test": getRandomNumber(0, 100)};
        }));
    }, [eventFlag])

    return (
        <div style={{width: "500px", height: "350px"}}>
            <ResponsiveBar
                data={chartData}
                keys={["test"]}
                indexBy={"test"}
                enableLabel={false}
            />
        </div>
    )
}


export default BarChart;

// [
//     {
//         "country": "AD",
//         "hot dog": 46,
//         "hot dogColor": "hsl(238, 70%, 50%)",
//         "burger": 163,
//         "burgerColor": "hsl(113, 70%, 50%)",
//         "sandwich": 177,
//         "sandwichColor": "hsl(120, 70%, 50%)",
//         "kebab": 34,
//         "kebabColor": "hsl(16, 70%, 50%)",
//         "fries": 168,
//         "friesColor": "hsl(256, 70%, 50%)",
//         "donut": 53,
//         "donutColor": "hsl(116, 70%, 50%)"
//     },
//     {
//         "country": "AE",
//         "hot dog": 104,
//         "hot dogColor": "hsl(116, 70%, 50%)",
//         "burger": 122,
//         "burgerColor": "hsl(190, 70%, 50%)",
//         "sandwich": 23,
//         "sandwichColor": "hsl(238, 70%, 50%)",
//         "kebab": 33,
//         "kebabColor": "hsl(7, 70%, 50%)",
//         "fries": 90,
//         "friesColor": "hsl(104, 70%, 50%)",
//         "donut": 4,
//         "donutColor": "hsl(345, 70%, 50%)"
//     },
//     {
//         "country": "AF",
//         "hot dog": 144,
//         "hot dogColor": "hsl(73, 70%, 50%)",
//         "burger": 75,
//         "burgerColor": "hsl(125, 70%, 50%)",
//         "sandwich": 187,
//         "sandwichColor": "hsl(259, 70%, 50%)",
//         "kebab": 108,
//         "kebabColor": "hsl(114, 70%, 50%)",
//         "fries": 170,
//         "friesColor": "hsl(269, 70%, 50%)",
//         "donut": 42,
//         "donutColor": "hsl(243, 70%, 50%)"
//     },
//     {
//         "country": "AG",
//         "hot dog": 198,
//         "hot dogColor": "hsl(58, 70%, 50%)",
//         "burger": 57,
//         "burgerColor": "hsl(74, 70%, 50%)",
//         "sandwich": 148,
//         "sandwichColor": "hsl(123, 70%, 50%)",
//         "kebab": 11,
//         "kebabColor": "hsl(263, 70%, 50%)",
//         "fries": 21,
//         "friesColor": "hsl(179, 70%, 50%)",
//         "donut": 128,
//         "donutColor": "hsl(308, 70%, 50%)"
//     },
//     {
//         "country": "AI",
//         "hot dog": 119,
//         "hot dogColor": "hsl(202, 70%, 50%)",
//         "burger": 72,
//         "burgerColor": "hsl(15, 70%, 50%)",
//         "sandwich": 16,
//         "sandwichColor": "hsl(171, 70%, 50%)",
//         "kebab": 42,
//         "kebabColor": "hsl(95, 70%, 50%)",
//         "fries": 92,
//         "friesColor": "hsl(9, 70%, 50%)",
//         "donut": 129,
//         "donutColor": "hsl(185, 70%, 50%)"
//     },
//     {
//         "country": "AL",
//         "hot dog": 47,
//         "hot dogColor": "hsl(313, 70%, 50%)",
//         "burger": 87,
//         "burgerColor": "hsl(3, 70%, 50%)",
//         "sandwich": 183,
//         "sandwichColor": "hsl(175, 70%, 50%)",
//         "kebab": 183,
//         "kebabColor": "hsl(134, 70%, 50%)",
//         "fries": 187,
//         "friesColor": "hsl(90, 70%, 50%)",
//         "donut": 176,
//         "donutColor": "hsl(141, 70%, 50%)"
//     },
//     {
//         "country": "AM",
//         "hot dog": 171,
//         "hot dogColor": "hsl(246, 70%, 50%)",
//         "burger": 116,
//         "burgerColor": "hsl(48, 70%, 50%)",
//         "sandwich": 128,
//         "sandwichColor": "hsl(158, 70%, 50%)",
//         "kebab": 42,
//         "kebabColor": "hsl(232, 70%, 50%)",
//         "fries": 121,
//         "friesColor": "hsl(253, 70%, 50%)",
//         "donut": 172,
//         "donutColor": "hsl(141, 70%, 50%)"
//     }
// ]

// indexBy="test chart"
// margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
// padding={0.3}
// valueScale={{ type: 'linear' }}
// indexScale={{ type: 'band', round: true }}
// colors={{ scheme: 'nivo' }}
// defs={[
//         {
//             id: 'dots',
//             type: 'patternDots',
//             background: 'inherit',
//             color: '#38bcb2',
//             size: 4,
//             padding: 1,
//             stagger: true
//         },
// {
//     id: 'lines',
//         type: 'patternLines',
//     background: 'inherit',
//     color: '#eed312',
//     rotation: -45,
//     lineWidth: 6,
//     spacing: 10
// }
// ]}
// fill={[
//         {
//             match: {
//                 id: 'fries'
//             },
//             id: 'dots'
//         },
// {
//     match: {
//         id: 'sandwich'
//     },
//     id: 'lines'
// }
// ]}
// borderColor={{
//     from: 'color',
//         modifiers: [
//         [
//             'darker',
//             1.6
//         ]
//     ]
// }}
// axisTop={null}
// axisRight={null}
// axisBottom={{
//     tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: 'country',
//         legendPosition: 'middle',
//         legendOffset: 32,
//         truncateTickAt: 0
// }}
// axisLeft={{
//     tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: 'food',
//         legendPosition: 'middle',
//         legendOffset: -40,
//         truncateTickAt: 0
// }}
// labelSkipWidth={12}
// labelSkipHeight={12}
// labelTextColor={{
//     from: 'color',
//         modifiers: [
//         [
//             'darker',
//             1.6
//         ]
//     ]
// }}
// legends={[
//         {
//             dataFrom: 'keys',
//             anchor: 'bottom-right',
//             direction: 'column',
//             justify: false,
//             translateX: 120,
//             translateY: 0,
//             itemsSpacing: 2,
//             itemWidth: 100,
//             itemHeight: 20,
//             itemDirection: 'left-to-right',
//             itemOpacity: 0.85,
//             symbolSize: 20,
//             effects: [
//                 {
//                     on: 'hover',
//                     style: {
//                         itemOpacity: 1
//                     }
//                 }
//             ]
//         }
//         ]}
// role="application"
// ariaLabel="Nivo bar chart demo"
// barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}