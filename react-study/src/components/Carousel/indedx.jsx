import React, {useState} from 'react';
import {carouselData} from "./data";
import {CarouselBox, CarouselButton, CarouselContent} from "./style";

const Carousel = (props) => {

    const [dataList, setDataList] = useState(carouselData);

    return (
        <CarouselBox>
            {dataList.map(data => <CarouselContent><span>{data.value}</span></CarouselContent>)}
            <CarouselButton className={"left"}>{'<'}</CarouselButton>
            <CarouselButton className={"right"}>{'>'}</CarouselButton>
        </CarouselBox>
    )
};

export default Carousel;