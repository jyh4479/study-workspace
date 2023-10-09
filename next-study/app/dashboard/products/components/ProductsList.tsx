import axios from "axios";

const getProductData = async () => {
    const data = await axios.get('https://dummyjson.com/products/100');
    console.log(data.data.title);
    return data.data;
}

const ProductsList = async () => {

    const data = await getProductData();

    // return <div onClick={() => console.log("맞다")}>Test component</div>;
    return <div>{data.title}</div>;
}

export default ProductsList;