/*
994. Rotting Oranges
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  if (row === 0) return grid;
  let dist = [...Array(row)].map(e => Array(col).fill(0));    
  // console.log(dist)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] ===2) checkFourWay(grid,i,j)
        }
    }
};

function checkFourWay(grid,i,j){
    let up =    (typeof grid[i-1] !== 'undefined') ? grid[i-1][j] : 0
    let down =  (typeof grid[i+1] !== 'undefined') ? grid[i+1][j] : 0
    let left =  (typeof grid[j-1] !== 'undefined') ? grid[i][j-1] : 0
    let right = (typeof grid[j+1] !== 'undefined') ? grid[i][j+1] : 0
    console.log(up,down,left,right)
}

/*
[
[2,1,1],
[1,1,0],
[0,1,1]
]
*/