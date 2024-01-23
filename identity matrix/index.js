function createIdentityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(0);
    }
    row.push(1);
    for (let j = 0; j < n - (i + 1); j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  console.log(matrix);
}

createIdentityMatrix(5)