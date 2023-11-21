import {useEffect, useState} from "react";

const UseEffectCleanUp = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(`hook start!`);
        let shouldIgnore = false;

        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();

            console.log(`fetch! ${shouldIgnore}`);
            if (!shouldIgnore) {
                console.log(result);
                setData(result);
            }
        }

        fetchData();

        return () => {
            console.log(`clean up!`);
            shouldIgnore = true;
        }
    }, [])

    return data.map(data => <div>{data.title}</div>)
}

export default UseEffectCleanUp;