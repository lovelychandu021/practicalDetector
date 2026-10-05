const r = require("raylib");

function verticalparticalobject(start, width) {
    return {
        particalX: start,
        particalWidth: width,
    }
}

function horizontalparticalobject(start, height) {
    return {
        particalY: start,
        particalHeight: height,
    }
}

function drawPartical(hp, w, vp1, vp2) {
    r.DrawRectangle(0, hp.particalY, w.width, hp.particalHeight, r.BLUE);
    r.DrawRectangle(vp1.particalX, 0, vp1.particalWidth, w.height, r.BLUE);
    r.DrawRectangle(vp2.particalX, 0, vp2.particalWidth, w.height, r.BLUE);
}

module.exports = {
    verticalparticalobject,
    horizontalparticalobject,
    drawPartical,
}; 