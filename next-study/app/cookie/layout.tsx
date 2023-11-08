import Link from "next/link";

const CookieLayout = ({children,}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
        <div>
            <div>Cookie page router</div>
            <div>
                <Link href={"/cookie"} className={"m-5"}>Root</Link>
                <Link href={"/cookie/home"} className={"m-5"}>Home</Link>
                <Link href={"/cookie/setting"} className={"m-5"}>Setting</Link>
            </div>
        </div>
        <div className={"w-full flex items-center justify-center"}>
            {children}
        </div>
        </body>
        </html>
    )
}

export default CookieLayout;