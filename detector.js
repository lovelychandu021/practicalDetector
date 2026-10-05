const r = require("raylib");

function changeDetectorPosition(detectorY, Speed) {
    return detectorY + Speed;
}

function isoverlapping(detectorX, detectorWidth, particalX, particalWidth) {
    return (detectorX < particalX + particalWidth && detectorX + detectorWidth > particalX);
}

function calcSpeed(X, Width, Start, End, Speed) {
    return isOutOfBounds(X, Start, Width, End) ? -Speed : Speed;
}

function isOutOfBounds(X, Start, Width, End) {
    return (X <= Start || X + Width >= End);
}

function isColoureDetected(X, Width, particalX, particalWidth) {
    return isoverlapping(X, Width, particalX, particalWidth) ? r.RED : r.WHITE;
}

function horizontaldetectorObject(start, end, width, speed) {
    return {
        x: start,
        width: width,
        speed: speed,
        start: start,
        end: end,
        colour: r.WHITE,
    };
}

function verticaldetectorObject(start, end, height, speed) {
    return {
        y: start,
        height: height,
        speed: speed,
        start: start,
        end: end,
        colour: r.WHITE,
    };
}

function updatesDetector1(hd1, vp1) {
    hd1.x = changeDetectorPosition(hd1.x, hd1.speed);
    hd1.speed = calcSpeed(hd1.x, hd1.width, hd1.start, hd1.end, hd1.speed);
    hd1.colour = isColoureDetected(hd1.x, hd1.width, vp1.particalX, vp1.particalWidth);
}

function updatesDetector2(hd2, vp2) {
    hd2.x = changeDetectorPosition(hd2.x, hd2.speed);
    hd2.speed = calcSpeed(hd2.x, hd2.width, hd2.start, hd2.end, hd2.speed);
    hd2.colour = isColoureDetected(hd2.x, hd2.width, vp2.particalX, vp2.particalWidth);
}

function updatesDetector3(vd, hp) {
    vd.y = changeDetectorPosition(vd.y, vd.speed);
    vd.speed = calcSpeed(vd.y, vd.height, vd.start, vd.end, vd.speed);
    vd.colour = isColoureDetected(vd.y, vd.height, hp.particalY, hp.particalHeight);
}

function drawdetector(vd, w, hd1, hd2) {
    r.DrawRectangle(0, vd.y, w.width, 50, vd.colour);
    r.DrawRectangle(hd1.x, 0, hd1.width, w.height, hd1.colour);
    r.DrawRectangle(hd2.x, 0, hd2.width, w.height, hd2.colour);
}


module.exports = {
    changeDetectorPosition,
    isoverlapping,
    calcSpeed,
    isColoureDetected,
    horizontaldetectorObject,
    verticaldetectorObject,
    updatesDetector1,
    updatesDetector2,
    updatesDetector3,
    drawdetector,
}; 