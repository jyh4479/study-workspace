import React, {useState} from 'react';
import axios from "axios";

const ApiTestContainer = (props) => {

    const [dataKey, setDataKey] = useState(1);
    const [firstApiData, setFirstApiData] = useState("Test Data");
    const [secondApiData, setSecondApiData] = useState("Test Data2");

    const getAPI = async () => {
        console.log("First API Call0");

        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`);

        console.log("First API Call1");

        const result2 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`);

        console.log("First API Call2");

        const result3 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`);

        console.log("First API Call3");


        // setFirstApiData(prev => {
        //     console.log("First API Call3")
        //     return result.data?.title;
        // });
        //
        // console.log("First API Call4");
    }

    const getAPI2 = () => {
        console.log("Second API Call0");

        axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`).then(result => {
            console.log("Second API Call1");
        });

        axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`).then(result => {
            console.log("Second API Call2");
        });

        axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`).then(result => {
            console.log("Second API Call3");
        });

        console.log("Second API Call4");

        // axios.get(`https://jsonplaceholder.typicode.com/todos/${dataKey}`).then(result => {
        //     console.log("Second API Call1");
        //     setSecondApiData(prev => {
        //         console.log("Second API Call2");
        //         return result.data?.title;
        //     });
        // });
    }

    return (
        <div>
            <input type="number" onChange={e => setDataKey(Number(e.target.value))}/>
            <button onClick={getAPI}>API CALL</button>
            <button onClick={getAPI2}>API CALL2</button>

            <div>
                <div>{firstApiData}</div>
                <div>{secondApiData}</div>
            </div>
        </div>
    )
};

export default ApiTestContainer;