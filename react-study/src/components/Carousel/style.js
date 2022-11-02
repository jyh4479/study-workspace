import styled from "styled-components";

export const CarouselBox = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 400px;
  height: 200px;

  position: relative;
`

export const CarouselContent = styled.div`
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 0 150px;

  height: 100px;
  margin: 0 10px;

  border: 1px solid #000000
`

export const CarouselButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 50%;

  &.left {
    left: 0;
    transform: translate(0, -50%);
  }

  &.right {
    left: 100%;
    transform: translate(-100%, -50%);
  }
`