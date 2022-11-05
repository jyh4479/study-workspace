import React, {useRef, useState} from 'react';
import {carouselData} from "./data";
import {CarouselBox, CarouselButton, CarouselContent} from "./style";

const Carousel = (props) => {

    const [dataList, setDataList] = useState(carouselData);
    const [curPosition, setCurPosition] = useState(0);
    const contentsRef = useRef([]);

    const distance = 100;

    const checkPosition = (position) => {

    }

    const onClickMoveContents = (direction) => {
        setCurPosition(prev => {
            const nextPosition = prev + (direction === "left" ? distance : -distance);

            if (checkPosition(nextPosition)) {
                return prev;
            }

            contentsRef.current.forEach(el => {
                el.style.transform = `translateX(${nextPosition}%)`;
            })
            return nextPosition;
        })
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
            <CarouselButton className={"left"} onClick={() => onClickMoveContents("left")}>{'<'}</CarouselButton>
            <CarouselButton className={"right"} onClick={() => onClickMoveContents("right")}>{'>'}</CarouselButton>
        </CarouselBox>
    )
};

export default Carousel;