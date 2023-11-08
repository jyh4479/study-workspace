'use client'
import axios from "axios";

const myllLogin = async () => {
    try {
        const result = await axios.post("https://myll-backend.com/login", {
            email: "admin",
            password: "admin"
        });

        // const result = await axios.get("https://myll-backend.com/");ㅊ
        // const result = await axios.get("https://dummyjson.com/products/44");

        console.log(result);
        console.log(result.data);
    } catch (e) {
        console.log(e);
    }
}

const CookieHomePage = () => {

    return (
        <>
            <div>cookie home page</div>
            <button onClick={() => myllLogin()}>로그인 동작!</button>
        </>
    )
}

export default CookieHomePage;