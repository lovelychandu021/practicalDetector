function condition(detectorX, detectorWidth, windowWidth) {
    return detectorX <= 0 || detectorX + detectorWidth >= windowWidth
}
function conditionBetween(detectorX, detectorWidth, start, end) {
    return detectorX <= start || detectorX + detectorWidth >= end;
}
function increment(detectorX, Speed) {
    return detectorX + Speed;
}
function overlap(detectorX, detectorWidth, particaldetectorX, particalWidth) {
    return detectorX < particaldetectorX + particalWidth && detectorX + detectorWidth > particaldetectorX;
}
module.exports = {
    condition,
    conditionBetween,
    increment,
    overlap,
};