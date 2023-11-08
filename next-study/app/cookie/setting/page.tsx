import {cookies} from 'next/headers'

const CookieSettingPage = () => {

    const cookieStore = cookies();
    const cookieTest = cookieStore.get("cookie-test");

    console.log(cookieStore);

    return (
        <div>{`Current cookie value : ${cookieTest?.value}`}</div>
    )
}

export default CookieSettingPage;