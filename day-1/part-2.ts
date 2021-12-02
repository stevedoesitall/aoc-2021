import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");
let totalIncreases: number = 0;
let prevMeasurement: number = 0;

for (let pos: number = 0; pos < textArray.length; pos++) {
    const numOne: number = parseInt(textArray[pos]);
    const numTwo: number = parseInt(textArray[pos + 1]);
    const numThree: number = parseInt(textArray[pos + 2]);

    if (numOne && numTwo && numThree) {
        const currentMeasurement: number = numOne + numTwo + numThree;

        if (prevMeasurement && (currentMeasurement > prevMeasurement)) {
            totalIncreases++;
        }
        
        prevMeasurement = currentMeasurement;
    }
}

console.log(totalIncreases);