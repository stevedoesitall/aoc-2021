import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");
let totalIncreases: number = 0;
let prevMeasurement: number;

textArray.forEach((measurement: string, index: number) => {
    const currentMeasurement: number = parseInt(measurement);
    if (index !== 0) {
        if (currentMeasurement > prevMeasurement) {
            totalIncreases++;
        }
    }
    prevMeasurement = currentMeasurement;
});

console.log(totalIncreases);
