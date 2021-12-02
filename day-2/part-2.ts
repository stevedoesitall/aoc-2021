import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");

let forward = 0;
let depth = 0;
let aim = 0;

textArray.forEach(command => {
    if (command.includes("forward")) {
        const unit = parseInt(command.substring(8));
        forward += unit;
        depth += unit * aim;
    } else if (command.includes("down")) {
        const unit = parseInt(command.substring(5));
        aim += unit;
    } else {
        const unit = parseInt(command.substring(3));
        aim -= unit;
    }
})

const position = forward * depth;

console.log(position);