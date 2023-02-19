// // console.log("Hello World!");
// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
var myHero = superheroes.random();

var superVillains = require("supervillains");
var myVillain = superVillains.random();

console.log("Oh nooo the " + myVillain + " is coming!");
console.log("Here comes " + myHero + "!");