const triangle = (height) => {
  let resultText = "";
  
  for (let i = 1; i <= height; i++) {
    resultText += "* ".repeat(i);
    resultText += "\n";
  }
  
  console.log(resultText);
}

// triangle(6);

const square = (height) => {
  let resultText = "";
  
  for (let i = 1; i <= height; i++) {
    resultText += "* ".repeat(height);
    resultText += "\n";
  }
  
  console.log(resultText);
}

// square(6);

const equilateralTriangle = (height) => {
  let resultText = "";

  for (let i = 1; i <= height; i++) {
    const numberOfStars = i * 2 - 1;
    const numberOfSpaces = (height * 2) - i * 2;
    resultText += " ".repeat(numberOfSpaces);
    resultText += "* ".repeat(numberOfStars);
    resultText += "\n";
    
  }
  console.log(resultText);
}

// equilateralTriangle(6);

const emptySquare = (height) => {
  let resultText = "";

  for (let i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
      resultText += "* ".repeat(height);
    } else {
      resultText += '*';
      resultText += " ".repeat(height * 2 - 3);
      resultText += "*";
    }
    resultText += "\n";
  }
  console.log(resultText);
}

// emptySquare(6);

const multiplicationTable = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');
  }
}

// multiplicationTable(10);