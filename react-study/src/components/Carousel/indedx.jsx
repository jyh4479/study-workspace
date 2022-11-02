import React, {useState} from 'react';
import {carouselData} from "./data";
import {CarouselBox, CarouselButton, CarouselContent} from "./style";

const Carousel = (props) => {

    const [dataList, setDataList] = useState(carouselData);

    const onClickLeft = () => {
        setDataList(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)])
    }

    const onClickRight = () => {
        setDataList(prev => [...prev.slice(1), prev[0]])
    }

    return (<CarouselBox>
        {dataList.map(data => <CarouselContent key={data.value}><span>{data.value}</span></CarouselContent>)}
        <CarouselButton className={"left"} onClick={() => onClickLeft()}>{'<'}</CarouselButton>
        <CarouselButton className={"right"} onClick={() => onClickRight()}>{'>'}</CarouselButton>
    </CarouselBox>)
};

export default Carousel;