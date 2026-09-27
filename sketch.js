const r = require("raylib");
const calculation = require("./math");

const windowWidth = 1000;
const windowHeight = 700;

let detector1_X = 0;
const detector1_Width = 50;
let detector1_Speed = 3;

let detector2_X = 500;
const detector2_Width = 50;
let detector2_Speed = 5;

let detectorY = 0;
const detectorHeight = 50;
let detectorSpeedY = 4;

const partical1_X = 400;
const partical1_width = 100;

const partical2_X = 700;
const partical2_Width = 10;

const particalY = 300;
const particalHeight = 30;

let detectorColour1 = r.WHITE;
let detectorColour2 = r.WHITE;
let detectorColourY = r.WHITE;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    r.InitWindow(windowWidth, windowHeight, "detector");
    r.SetTargetFPS(FPS);
}

function update() {
    detector1_X = calculation.increment(detector1_X, detector1_Speed);
    detector2_X = calculation.increment(detector2_X, detector2_Speed);
    detectorY = calculation.increment(detectorY, detectorSpeedY);

    if (calculation.conditionBetween(detector1_X, detector1_Width, 0, windowWidth / 2)) {
        detector1_Speed = -detector1_Speed;
    }
    if (calculation.conditionBetween(detector2_X, detector2_Width, windowWidth / 2, windowWidth)) {
        detector2_Speed = -detector2_Speed;

    }
    if (calculation.conditionBetween(detectorY, detectorHeight, 0, windowHeight)) {
        detectorSpeedY = -detectorSpeedY;
    }

    const overlapping1 = calculation.overlap(detector1_X, detector1_Width, partical1_X, partical1_width) || calculation.overlap(detector1_X, detector1_Width, partical2_X, partical2_Width);;
    const overlapping2 = calculation.overlap(detector2_X, detector2_Width, partical1_X, partical1_width) || calculation.overlap(detector2_X, detector2_Width, partical2_X, partical2_Width);;
    const overlappingY = calculation.overlap(detectorY, detectorHeight, particalY, particalHeight);;

    detectorColour1 = overlapping1 ? r.RED : r.WHITE;
    detectorColour2 = overlapping2 ? r.RED : r.WHITE;
    detectorColourY = overlappingY ? r.RED : r.WHITE;
}

function draw() {

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(0, particalY, windowWidth, particalHeight, r.BLUE);
    r.DrawRectangle(partical1_X, 0, partical1_width, windowHeight, r.BLUE);
    r.DrawRectangle(partical2_X, 0, partical2_Width, windowHeight, r.BLUE);

    r.DrawRectangle(detector1_X, 0, detector1_Width, windowHeight, detectorColour1);
    r.DrawRectangle(detector2_X, 0, detector2_Width, windowHeight, detectorColour2);
    r.DrawRectangle(0, detectorY, windowWidth, detectorHeight, detectorColourY);

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