function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}
function condition(detectorX, detectorWidth, windowWidth) {
    return detectorX <= 0 || detectorX + detectorWidth >= windowWidth
}
function increment(detectorX, detectorSpeed) {
    return detectorX + detectorSpeed;
}

function overlap(detectorX, detectorWidth, particalX, particalWeidth) {
    return detectorX < particalX + particalWeidth && detectorX + detectorWidth > particalX;
}
function conditionBetween(detectorX, detectorWidth, start, end) {
    return detectorX <= start || detectorX + detectorWidth >= end;
}
module.exports = {
    calcOffset,
    condition,
    increment,
    overlap,
    conditionBetween,
};