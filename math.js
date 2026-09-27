function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}
function condition(detectorX, detectorWidth, windowWidth) {
    return detectorX <= 0 || detectorX + detectorWidth >= windowWidth
}
function increment(detectorX, detectorSpeed) {
    return detectorX + detectorSpeed;
}

module.exports = {
    calcOffset,
    condition,
    increment,
};