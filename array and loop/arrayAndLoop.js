// Task A:

const countElement = (array, element) => {
  let count = 0;
  for (const elm of array) {
    if (element === elm) {
      count++;
    }
  }
  return count;
}

const countAllElements = (array) => {
  for (const index in array) {
    const count = countElement(array, array[index]);
    if (index == array.indexOf(array[index])) {
      console.log(`Element: ${array[index]} - count: ${count}`);
    }
  }
}

// countAllElements([5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ]);

// Task B:

const isArrayseEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const element of arr1) {
    if (countElement(arr1, element) !== countElement(arr2, element)) {
      return false;
    }
  }
  return true;
}

// console.log(isArrayseEqual( [1, 2, 3], [1, 2, 3] ));
// console.log(isArrayseEqual( [1, 2, 3], [3, 2, 1]  ));
// console.log(isArrayseEqual( [1, 2], [1, 2, 2] ));
// console.log(isArrayseEqual( ["salam", 2], ["salam", "2"] ));
// console.log(isArrayseEqual( ["At", 1], [1, "aT"] ));

// Task C:

const secondMinMax = (array) => {
  array = array.filter(elm => elm !== Math.max(...array) && elm !== Math.min(...array));
  console.log(`Second max: ${Math.max(...array)} Second min: ${Math.min(...array)}`);
}

// secondMinMax( [ -7, -71, 66, 11 ,3 , 8 , 67] );
// secondMinMax( [ 1, 6, 0, 5 , 3 , 8 , 16] );

// Task D:

const sumOfPositivesAndNegatives = (array) => {
  let sumOfPositives = 0;
  let sumOfNegatives = 0;
  array.forEach(element => {
    element > 0 ? sumOfPositives += element : sumOfNegatives += element;
  });
  console.log(`Sum of Positive Numbers: ${sumOfPositives}. Sum of Negative Numbers: ${sumOfNegatives} \n`);
}

// sumOfPositivesAndNegatives( [ 1, 2, -5, 8, -3, 9 , -7 ] );
// sumOfPositivesAndNegatives( [ -7, -3, 2, -8, 5 , -4 ] );

// Task E:

const arrayWithMinLimit = (array, limit) => {
  const newArray = [];
  array.forEach(element => {
    if(element > limit) {
      newArray.push(element);
    }
  });
  console.log(newArray);
}

// arrayWithMinLimit( [ 1, 2, -5, 8, -3, 9 , -7 ], 4 );
// arrayWithMinLimit( [ -7, -3, 2, -8, 5 , -4 ], -4 );

// Task F:

const multiplyWithBoolean = (array) => {
  let result = 1;
  for (let i = 1; i < array.length; i += 2) {
    if(array[i]) {
      result *= array[ i - 1 ];
    }
  }
  console.log(result);
}

// multiplyWithBoolean( [2, true, 3, false, 7, true, 4, false] );
// multiplyWithBoolean( [8, false, 4, false, 11, false, 2, false] );
// multiplyWithBoolean( [8, false, 3, true, 7, false, 1, true, 8, true] );
// multiplyWithBoolean( [5, false, 2, true, 7, true, 6, true, 9, false] );

// Task G:

const arrayUnique = (array) => {
  array = array.map(element => element = String(element));
  let result = '';
  array.forEach((element, index) => {
    if (index === array.indexOf(element)) {
      result += element + ' ';
    }
  });
  console.log(result);
}

// arrayUnique( [1, "salam", 1, true, true, false, false, false, 5, "5"] );
// arrayUnique( [2, "class", 1, true, "class", 16, 17, 18,  "17"] );