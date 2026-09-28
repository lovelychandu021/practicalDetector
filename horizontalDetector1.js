const r = require("raylib");
const w = require("./window")

let X = 0;
const Width = 50;
let Speed = 3;
let Colour = r.WHITE;
const particalX = w.width * 0.2;
const particalWidth = 100;
let start = 0;
let end = w.width / 2;


module.exports = {
    X,
    Width,
    Speed,
    Colour,
    particalX,
    particalWidth,
    start,
    end,
};
