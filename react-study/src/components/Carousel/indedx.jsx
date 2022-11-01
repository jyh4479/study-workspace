import React, {useState} from 'react';
import {carouselData} from "./data";
import {CarouselBox} from "./style";

const Carousel = (props) => {

    const [dataList, setDataList] = useState(carouselData);


    return (
        <CarouselBox>

        </CarouselBox>
    )
};

export default Carousel;