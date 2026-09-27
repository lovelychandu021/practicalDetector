const r = require("raylib");
const verfication = require("./math");

const windowHeight = 700;
const windowWidth = 1000;

let detectorX = 0;
const detectorWidth = 50;
let detectorSpeed = 10;

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
}

function draw() {
    const detectorY = 0;

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(detectorX, detectorY, detectorWidth, windowHeight, r.WHITE);

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