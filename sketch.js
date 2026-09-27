const r = require("raylib");
const verfication = require("./math");

const windowHeight = 700;
const windowWidth = 1000;

let detectorX1 = 0;
const detectorWidth1 = 50;
let detectorSpeed1 = 3;

let detectorX2 = 950;
const detectorWidth2 = 50;
let detectorSpeed2 = -5;


const practicalX1 = 400;
const practicalWidth1 = 100;

const practicalX2 = 700;
const practicalWidth2 = 10;

let detectorColour1 = r.WHITE;
let detectorColour2 = r.WHITE;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    r.InitWindow(windowWidth, windowHeight, "detector");
    r.SetTargetFPS(FPS);
}

function update() {
    detectorX1 = verfication.increment(detectorX1, detectorSpeed1);
    detectorX2 = verfication.increment(detectorX2, detectorSpeed2);

    if (verfication.conditionBetween(detectorX1, detectorWidth1, 0, windowWidth / 2)) {
        detectorSpeed1 = -detectorSpeed1;
    }
    if (verfication.conditionBetween(detectorX2, detectorWidth2, windowWidth / 2, windowWidth)) {
        detectorSpeed2 = -detectorSpeed2;

    }

    overlape1 = verfication.overlap(detectorX1, detectorWidth1, practicalX1, practicalWidth1) || verfication.overlap(detectorX1, detectorWidth1, practicalX2, practicalWidth2);
    overlape2 = verfication.overlap(detectorX2, detectorWidth2, practicalX1, practicalWidth1) || verfication.overlap(detectorX2, detectorWidth2, practicalX2, practicalWidth2)

    const overlapping1 = overlape1;
    const overlapping2 = overlape2;

    detectorColour1 = overlapping1 ? r.RED : r.WHITE;
    detectorColour2 = overlapping2 ? r.RED : r.WHITE
}

function draw() {
    const detectorY = 0;

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(practicalX1, detectorY, practicalWidth1, windowHeight, r.BLUE);
    r.DrawRectangle(practicalX2, detectorY, practicalWidth2, windowHeight, r.BLUE);

    r.DrawRectangle(detectorX1, detectorY, detectorWidth1, windowHeight, detectorColour1);
    r.DrawRectangle(detectorX2, detectorY, detectorWidth2, windowHeight, detectorColour2);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};