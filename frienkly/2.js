var dx = [1, 0, -1, 0];
var dy = [0, 1, 0, 1];

function isCompleted(edges) {
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < edges[i].length; j++) {
      if (edges[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function deepCopyArray(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopyArray(item) : item));
}

function printEdges(edges) {
  for (let i = 0; i < edges.length; i++) {
    console.log(edges[i]);
  }
}

function solution(edges) {
  let result = 0;

  while (true) {
    const copiedEdges = deepCopyArray(edges);

    for (let i = 0; i < edges.length; i++) {
      for (let j = 0; j < edges[i].length; j++) {
        if (isCompleted(edges)) {
          return result;
        }

        if (edges[i][j] === 1) {
          for (let k = 0; k < 4; k++) {
            let nx = i + dx[k];
            let ny = j + dy[k];

            if (
              0 <= nx &&
              nx < edges[i].length &&
              0 <= ny &&
              ny < edges.length
            ) {
              copiedEdges[nx][ny] = 1;
            }
          }
        }
      }
    }
    edges = copiedEdges;
    // printEdges(edges);
    result++;
  }
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
  ])
); // 4

console.log(
  solution([
    [0, 1],
    [1, 0],
  ])
); // 1
