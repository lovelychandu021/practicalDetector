const r = require("raylib");

function changeDetectorPosition(detectorX, Speed) {
    return detectorX + Speed;
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

module.exports = {
    changeDetectorPosition,
    isoverlapping,
    calcSpeed,
    isColoureDetected,
}; 