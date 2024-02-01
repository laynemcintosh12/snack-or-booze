function unroll(squareArr) {
    if (!Array.isArray(squareArr) || squareArr.length === 0 || !Array.isArray(squareArr[0])) {
      throw new Error("Input must be a non-empty 2D array");
    }
  
    const result = [];
  
    while (squareArr.length > 0) {
      // Traverse top row
      result.push(...squareArr.shift());
  
      // Traverse right column
      for (let i = 0; i < squareArr.length; i++) {
        result.push(squareArr[i].pop());
        if (squareArr[i].length === 0) {
          squareArr.splice(i, 1);
          i--;
        }
      }
  
      // Traverse bottom row (if any)
      if (squareArr.length > 0) {
        result.push(...squareArr.pop().reverse());
      }
  
      // Traverse left column (if any)
      for (let i = squareArr.length - 1; i >= 0; i--) {
        result.push(squareArr[i].shift());
        if (squareArr[i].length === 0) {
          squareArr.splice(i, 1);
        }
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  
