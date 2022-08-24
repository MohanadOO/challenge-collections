//https://leetcode.com/problems/flood-fill/
//Easy

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const startPixelColor = image[sr][sc]
  if (startPixelColor !== newColor) {
    dfs(image, sr, sc, startPixelColor, newColor)
  }
  return image
}

function dfs(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  newColor: number
): void {
  if (image[sr][sc] === color) {
    image[sr][sc] = newColor
    if (sr >= 1) dfs(image, sr - 1, sc, color, newColor)
    if (sc >= 1) dfs(image, sr, sc - 1, color, newColor)
    if (sr + 1 < image.length) dfs(image, sr + 1, sc, color, newColor)
    if (sc + 1 < image[0].length) dfs(image, sr, sc + 1, color, newColor)
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
