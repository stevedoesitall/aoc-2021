import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");

const findHighestNumber = (arr: string[], pos: number, type: string): number => {
    const newPos = pos + 1;
    let total = 0;
    let filterNum = "0";

    arr.forEach(num => {
        total += parseInt(num.substring(pos, newPos));
    });

    if (type === "high" && total >= (arr.length / 2) || 
        type === "low" && (total < (arr.length / 2))) {
            filterNum = "1";
    }

    const newArr = arr.filter(num => num.substring(pos, newPos) === filterNum);

    if (newArr.length === 1) {
        return parseInt(newArr[0], 2);
    } else {
        return findHighestNumber(newArr, newPos, type);
    }
};

const oxRating = findHighestNumber(textArray, 0, "high");
const coRating = findHighestNumber(textArray, 0, "low");

console.log(oxRating * coRating);