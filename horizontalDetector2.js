const r = require("raylib");
const w = require("./window");

let X = w.width / 2;
const Width = 50;
let Speed = 5;
let Colour = r.WHITE;
const particalX = w.width * 0.6;
const particalWidth = 10;
let start = w.width / 2;
let end  = w.width
module.exports = {
    X,
    Width,
    Speed,
    Colour,
    particalX,
    particalWidth,
    start,
    end,
}
