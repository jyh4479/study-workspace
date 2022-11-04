import React, {useRef, useState} from 'react';
import {carouselData} from "./data";
import {CarouselBox, CarouselButton, CarouselContent} from "./style";

const Carousel = (props) => {

    const [dataList, setDataList] = useState(carouselData);
    const [curPosition, setCurPosition] = useState(0);
    const contentsRef = useRef([]);

    const onClickLeft = () => {
        setCurPosition(prev => {
            const nextPosition = prev + 100;
            contentsRef.current.forEach(el => {
                el.style.transform = `translateX(${nextPosition}%)`;
            })
            return nextPosition;
        })
        // setDataList(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)])
    }

    const onClickRight = () => {
        setCurPosition(prev => {
            const nextPosition = prev - 100;
            contentsRef.current.forEach(el => {
                el.style.transform = `translateX(${nextPosition}%)`;
            })
            return nextPosition;
        })
        // setDataList(prev => [...prev.slice(1), prev[0]])
    }

    return (
        <CarouselBox>
            {
                dataList.map((data, index) => (
                    <CarouselContent
                        ref={el => contentsRef.current[index] = el}
                        key={data.value}><span>{data.value}</span>
                    </CarouselContent>
                ))
            }
            <CarouselButton className={"left"} onClick={() => onClickLeft()}>{'<'}</CarouselButton>
            <CarouselButton className={"right"} onClick={() => onClickRight()}>{'>'}</CarouselButton>
        </CarouselBox>
    )
};

export default Carousel;