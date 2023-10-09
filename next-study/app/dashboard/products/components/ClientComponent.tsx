'use client'

import axios from "axios";

const getProductData = async () => {

    const product = await axios.get(`https://dummyjson.com/products/44`);
    return product.data;
}

const ClientComponent = async () => {

    // const productData = await getProductData();

    console.log('im client component');

    return (
        <div>
            {/*<div>{productData.id}</div>*/}
            {/*<div>{productData.categories}</div>*/}
            {/*<div>{productData.title}</div>*/}
            {/*<div>{productData.description}</div>*/}
            {/*<div>{productData.price}</div>*/}
        </div>
    )
}

export default ClientComponent;