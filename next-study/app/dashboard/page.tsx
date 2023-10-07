'use client'
import {useRouter} from 'next/navigation'
import {useState} from "react";

const dashboard = () => {
    const router = useRouter();

    const [productId, setProductId] = useState('');

    return (
        <div>
            <div>
                <label className={"m-5"}>product id</label>
                <input className={"m-5 text-slate-950"} value={productId}
                       onChange={e => setProductId(e.target.value)}/>
            </div>
            <div>
                <button className={"m-5 bg-blue-400"}
                        onClick={() => router.push(`/dashboard/products/${productId}`)}>페이지 이동
                </button>
            </div>
        </div>
    )
}

export default dashboard;