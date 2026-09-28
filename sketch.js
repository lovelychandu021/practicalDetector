const r = require("raylib");
const m = require("./math");
const hd1 = require("./horizontalDetector1");
const hd2 = require("./horizontalDetector2");
const vd = require("./verticalDetector");
const w = require("./window");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, "detector");
    r.SetTargetFPS(FPS);
}

function updatesDetector1() {
    hd1.X = m.changeDetectorPosition(hd1.X, hd1.Speed);
    hd1.Speed = m.isOutOfBounds(hd1.X, hd1.Width, hd1.start, hd1.end, hd1.Speed);
    hd1.Colour = m.isColoureDetected(hd1.X, hd1.Width, hd1.particalX, hd1.particalWidth);
}

function updaesDetector2() {
    hd2.X = m.changeDetectorPosition(hd2.X, hd2.Speed);
    hd2.Speed = m.isOutOfBounds(hd2.X, hd2.Width, hd2.start, hd2.end, hd2.Speed);
    hd2.Colour = m.isColoureDetected(hd2.X, hd2.Width, hd2.particalX, hd2.particalWidth);
}

function updatesDetector3() {
    vd.Y = m.changeDetectorPosition(vd.Y, vd.Speed);
    vd.Speed = m.isOutOfBounds(vd.Y, vd.Height, vd.start, vd.end, vd.Speed);
    vd.Colour = m.isColoureDetected(vd.Y, vd.Height, vd.particalY, vd.particalHeight);
}

 function drawdetector() {
        r.DrawRectangle(0, vd.Y, w.width, vd.Height, vd.Colour);
        r.DrawRectangle(hd1.X, 0, hd1.Width, w.height, hd1.Colour);
        r.DrawRectangle(hd2.X, 0, hd2.Width, w.height, hd2.Colour);
 }

 function drawPartical() {
        r.DrawRectangle(0, vd.particalY, w.width, vd.particalHeight, r.BLUE);
        r.DrawRectangle(hd1.particalX, 0, hd1.particalWidth, w.height, r.BLUE);
        r.DrawRectangle(hd2.particalX, 0, hd2.particalWidth, w.height, r.BLUE);
 }

function update() {
    
    updatesDetector1();

    updaesDetector2();

    updatesDetector3();

}

function draw() {

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    drawPartical();

    drawdetector();

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
}