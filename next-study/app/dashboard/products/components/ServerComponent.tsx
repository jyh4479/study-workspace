import axios from "axios";
import {use} from "react";

const getProductData = async () => {

    const product = await axios.get(`https://dummyjson.com/products/55`);
    return product.data;
}

const ServerComponent = () => {

    const productData = use(getProductData());

    console.log('im server component');

    return (
        <div>
            <div>{productData.id}</div>
            <div>{productData.categories}</div>
            <div>{productData.title}</div>
            <div>{productData.description}</div>
            <div>{productData.price}</div>
        </div>
    )
}

export default ServerComponent;