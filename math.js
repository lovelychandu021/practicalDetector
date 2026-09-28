const r = require("raylib");

function changeDetectorPosition(detectorX, Speed) {
    return detectorX + Speed;
}

function isoverlapping(detectorX, detectorWidth, particalX, particalWidth) {
    return detectorX < particalX + particalWidth && detectorX + detectorWidth > particalX;
}

function isOutOfBounds(X, Width, Start, End, Speed) {
    return (X <= Start|| X+ Width >= End) ? -Speed : Speed;
}

function isColoureDetected(X, Width, particalX, particalWidth) {
    ColourChange = isoverlapping(X, Width, particalX, particalWidth);
    return ColourChange ? r.RED : r.WHITE;
}

module.exports = {
    changeDetectorPosition,
    isoverlapping,
    isOutOfBounds,
    isColoureDetected,
}; 