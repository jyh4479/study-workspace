'use client'
import axios from "axios";

const getProductData = async (productId: string) => {

    const product = await axios.get(`https://dummyjson.com/products/${productId}`);

    console.log(product.data)

    return product.data;
}

const product = async ({params}: { params: { productId: string } }) => {

    const productData = await getProductData(params.productId);

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

export default product;