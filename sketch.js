const r = require("raylib");
const verfication = require("./math");

const windowHeight = 700;
const windowWidth = 1000;

let detectorX = 0;
const detectorWidth = 50;
let detectorSpeed = 10;

const particalX = 400;
const particalWeidth = 100;

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
    const isOverLapping = verfication.overlap(detectorX, detectorWidth, particalX, particalWeidth);
    detectorColour = isOverLapping ? r.RED : r.WHITE;
}

function draw() {
    const detectorY = 0;

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particalX, detectorY, particalWeidth, windowHeight, r.BLUE);
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