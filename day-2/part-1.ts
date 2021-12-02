import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8");
const textArray: string[] = text.split("\n");

const commands = {
    forward: 0,
    down: 0,
    up: 0
};

textArray.forEach(command => {
    if (command.includes("forward")) {
        const unit = parseInt(command.substring(8));
        commands.forward += unit;
    } else if (command.includes("down")) {
        const unit = parseInt(command.substring(5));
        commands.down += unit;
    } else {
        const unit = parseInt(command.substring(3));
        commands.up += unit;
    }
})

const depth = commands.down - commands.up;
const position = commands.forward * depth;

console.log(position);