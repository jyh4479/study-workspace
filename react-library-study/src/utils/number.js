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

export const getYaxisNumericFormat = (number) => {

    if (10 ** 3 <= number && number < 10 ** 6) return (number / 10 ** 3) + 'K';
    if (10 ** 6 <= number && number < 10 ** 9) return (number / 10 ** 6) + 'M';
    if (10 ** 9 <= number && number < 10 ** 12) return (number / 10 ** 9) + 'B';
    if (10 ** 12 <= number && number < 10 ** 16) return (number / 10 ** 12) + 'T';
    if (10 ** 16 <= number) return (number / 10 ** 16) + 'Q';

    return number;
}