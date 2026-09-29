const r = require("raylib");
const w = require("./window")

let Y = 0;
const Height = 50;
let Speed = 4;
let Colour = r.WHITE;
let start = 0;
let end = w.height

module.exports = {
    Y,
    Height,
    Speed,
    Colour,
    start,
    end,
}