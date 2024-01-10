const testArray = [1, 2, 3, 4, 5, 6];

Array.prototype.customIncludes = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (element === this[i]) {
      return true;
    }
  }
  return false;
}

Array.prototype.customIndexOf = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (element === this[i]) {
      return i;
    }
  }
  return -1;
}

Array.prototype.customReverse = function () {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    let tempitem = this[i];
    this[i] = this[ this.length - (i + 1) ];
    this[ this.length - (i + 1) ] = tempitem;
  }
}

Array.prototype.customJoin = function (str) {
  let returnString = ''
  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      returnString += this[i];
    } else {
      returnString += str + this[i];
    }
  }
  return returnString;
}

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
}

Array.prototype.customFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}

Array.prototype.customFilter = function (callback) {
  const returnArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      returnArray.push(this[i])
    }
  }
  return returnArray;
}

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}

Array.prototype.customReduce = function (callback, initialValue = 0) {
  let previusValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    previusValue = callback(previusValue, this[i], i, this)
  }
  return previusValue;
}

Array.prototype.customSort = function (callback) {
  if (callback !== undefined) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        if(callback(this[j], this[j - 1]) < 0) {
          let tempitem = this[j];
          this[j] = this[j - 1];
          this[j - 1] = tempitem;
        }
      }
    }
  } else {
    for (let i = 1; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        if(String(this[j]).charCodeAt(0) -  String(this[j - 1]).charCodeAt(0) < 0) {
          let tempitem = this[j];
          this[j] = this[j - 1];
          this[j - 1] = tempitem;
        }
      }
    }
  }
}

const suffledArray = [ 2, 4, 5, 3, 6, 7, 1, 8 ];
const stringArray = [ 'a', 'c', 'r', 'u', 'b' ];

// suffledArray.customSort((a, b) => a - b);
// console.log(suffledArray);

// stringArray.customSort();
// console.log(stringArray);

// console.log(testArray.customIncludes(1));
// console.log(testArray.customIndexOf(5));
// testArray.customReverse();
// console.log(testArray);
// console.log(testArray.customJoin('-'));
// console.log(testArray.customFind((val) => val > 3));
// console.log(testArray.customFindIndex((val) => val > 3));
// console.log(testArray.customFilter((val) => val > 3));
// console.log(testArray.customEvery(val => val > 2));
// console.log(testArray.customSome(val => val > 7));
// console.log(testArray.customReduce((a, b) => a + b));