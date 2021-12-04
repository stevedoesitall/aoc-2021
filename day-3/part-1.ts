import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");
const bitMap: Map<number, number> = new Map();

let numKey = 1;
while (numKey <= 12) {
    bitMap.set(numKey, 0);
    numKey++;
}

textArray.forEach(item => {
    const splitItem = item.split("");
    splitItem.forEach((num, index) => {
        const currentVal: number | undefined = bitMap.get(index + 1);

        if (typeof currentVal === "number") {
            bitMap.set(index + 1, currentVal + parseInt(num));
        }
    });
});

let gammaBinary = "";
let epilsonBinary = "";

bitMap.forEach(bit => {
    const limit: number = textArray.length / 2;
    if (bit > limit) {
        gammaBinary += "1";
        epilsonBinary += "0";
    } else {
        gammaBinary += "0";
        epilsonBinary += "1";
    }
});

console.log(parseInt(gammaBinary, 2) * parseInt(epilsonBinary, 2));