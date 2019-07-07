export function pointRandom(leftBound, rightBound) {
  return Math.floor(Math.random() * (rightBound - leftBound)) + leftBound;
}
