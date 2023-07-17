"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//made the funcation for printing name
function show_magicains(magicains) {
    for (let i = 0; i < magicains.length; i++) {
        console.log(magicains[i]);
    }
}
//made the funcation for greeting
function make_greate(great_magicains) {
    great_magicains.forEach(great_magicains => {
        console.log(`${great_magicains} is the great magicain`);
    });
}
//deacalare the array
let magicains = ["houdini", "david", "blaine", "criss"];
//great magicain form array
let great_magicains = magicains.slice(0, 2);
//calling the funcation 
show_magicains(magicains);
//caling the funcation of great magician
make_greate(great_magicains);
