import {isNil} from "lodash";

export const getChartFillColor = (colorCode = "#000000") => {
    const a = 0.26;

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorCode);

    if (isNil(result)) return `rgba(${0},${0},${0},${a})`;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgba(${r},${g},${b},${a})`;
}