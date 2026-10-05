const r = require("raylib");
const d = require("./detector");
const p = require("./partical");
const w = require("./window");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, "my detector");
    r.SetTargetFPS(FPS);

    const world = {};

    world.hd1 = d.horizontaldetectorObject(0, w.width / 2, 50, 3);
    world.hd2 = d.horizontaldetectorObject(w.width / 2, w.width, 50, 5);
    world.vd = d.verticaldetectorObject(0, w.height / 2, 50, 4);

    world.vp1 = p.verticalparticalobject(w.width * 0.2, 100);
    world.vp2 = p.verticalparticalobject(w.width * 0.6, 10);
    world.hp = p.horizontalparticalobject(w.height * 0.3, 30);

    return world;
}

function update(world) {
    d.updatesDetector1(world.hd1, world.vp1);
    d.updatesDetector2(world.hd2, world.vp2);
    d.updatesDetector3(world.vd, world.hp);
}

function draw(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    p.drawPartical(world.hp, w, world.vp1, world.vp2);
    d.drawdetector(world.vd, w, world.hd1, world.hd2);

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