var image = [[1,1,1],[1,1,0],[1,0,1]]
var sr = 1
var sc = 1
var newColor = 2

var floodFill = function(image, sr, sc, newColor, Centry = image[sr][sc]){
  if(sr < 0 || sc < 0 || sr >= image.length|| sc >= image[sr].length || Centry !== image[sr][sc] || Centry === newColor)
  return image

  image[sr][sc] = newColor
  floodFill(image, sr-1, sc , newColor, Centry)
  floodFill(image, sr+1, sc , newColor, Centry)
  floodFill(image, sr, sc-1 , newColor, Centry)
  floodFill(image, sr, sc+1 , newColor, Centry)

  return image
}
