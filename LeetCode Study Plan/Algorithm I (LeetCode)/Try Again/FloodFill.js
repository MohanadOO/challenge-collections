//https://leetcode.com/problems/flood-fill/
//Easy

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

let floodFill = function (image, sr, sc, newColor) {
  const startPixelColor = image[sr][sc]
  if (startPixelColor != newColor) {
    paintPixel(image, sr, sc, startPixelColor, newColor)
  }
  return image
}

let paintPixel = (image, sr, sc, color, newColor) => {
  if (image[sr][sc] === color) {
    image[sr][sc] = newColor
    if (sr >= 1) paintPixel(image, sr - 1, sc, color, newColor)
    if (sc >= 1) paintPixel(image, sr, sc - 1, color, newColor)
    if (sr + 1 < image.length) paintPixel(image, sr + 1, sc, color, newColor)
    if (sc + 1 < image[0].length) paintPixel(image, sr, sc + 1, color, newColor)
  }
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
)
