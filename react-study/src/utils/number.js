export const yAxisNumber = (maxNumber) => {

}

export const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const getRandomIntNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and
}