const r = require("raylib");
const verfication = require("./math");

const windowHeight = 700;
const windowWidth = 1000;

let detectorX = 0;
const detectorWidth = 50;
let detectorSpeed = 3;

const practicalX1 = 400;
const practicalWidth1 = 100;

const practicalX2 = 700;
const practicalWidth2 = 10;

let detectorColour = r.WHITE;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    r.InitWindow(windowWidth, windowHeight, "detector");
    r.SetTargetFPS(FPS);
}

function update() {
    detectorX = verfication.increment(detectorX, detectorSpeed);
    const edgeTouch = verfication.condition(detectorX, detectorWidth, windowWidth);

    if (edgeTouch) {
        detectorSpeed = -detectorSpeed;
    }
    const overlapping1 = verfication.overlap(detectorX, detectorWidth, practicalX1, practicalWidth1);
    const overlapping2 = verfication.overlap(detectorX, detectorWidth, practicalX2, practicalWidth2);

    detectorColour = (overlapping1 || overlapping2) ? r.RED : r.WHITE;
}

function draw() {
    const detectorY = 0;

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(practicalX1, detectorY, practicalWidth1, windowHeight, r.BLUE);
    r.DrawRectangle(practicalX2, detectorY, practicalWidth2, windowHeight, r.BLUE);

    r.DrawRectangle(detectorX, detectorY, detectorWidth, windowHeight, detectorColour);

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