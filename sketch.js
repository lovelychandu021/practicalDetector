const r = require("raylib");
const m = require("./detector");
const w = require("./window");

const hd1 = require("./horizontalDetector1");
const hd2 = require("./horizontalDetector2");
const vd = require("./verticalDetector");

const p1 = require("./verticalpartical1");
const p2 = require("./verticalpartical2");
const p3 = require("./horizontalPartical");

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
    hd1.Speed = m.calcSpeed(hd1.X, hd1.Width, hd1.start, hd1.end, hd1.Speed);
    hd1.Colour = m.isColoureDetected(hd1.X, hd1.Width, p1.particalX, p1.particalWidth);
}

function updaesDetector2() {
    hd2.X = m.changeDetectorPosition(hd2.X, hd2.Speed);
    hd2.Speed = m.calcSpeed(hd2.X, hd2.Width, hd2.start, hd2.end, hd2.Speed);
    hd2.Colour = m.isColoureDetected(hd2.X, hd2.Width, p2.particalX, p2.particalWidth);
}

function updatesDetector3() {
    vd.Y = m.changeDetectorPosition(vd.Y, vd.Speed);
    vd.Speed = m.calcSpeed(vd.Y, vd.Height, vd.start, vd.end, vd.Speed);
    vd.Colour = m.isColoureDetected(vd.Y, vd.Height, p3.particalY, p3.particalHeight);
}

function drawParticals() {
       r.DrawRectangle(0, p3.particalY, w.width, p3.particalHeight, r.BLUE);
       r.DrawRectangle(p1.particalX, 0, p1.particalWidth, w.height, r.BLUE);
       r.DrawRectangle(p2.particalX, 0, p2.particalWidth, w.height, r.BLUE);
}

 function drawdetectors() {
        r.DrawRectangle(0, vd.Y, w.width, vd.Height, vd.Colour);
        r.DrawRectangle(hd1.X, 0, hd1.Width, w.height, hd1.Colour);
        r.DrawRectangle(hd2.X, 0, hd2.Width, w.height, hd2.Colour);
 }

function update() {
    
    updatesDetector1();

    updaesDetector2();

    updatesDetector3();

}

function draw() {

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    drawParticals();

    drawdetectors();

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