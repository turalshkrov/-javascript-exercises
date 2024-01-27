const getIsDeepEqual = (val1, val2) => {
  if (typeof val1 !== typeof val2) return false;
  else if (val1 === null && val2 === null) return true;
  else if (typeof val1 === "object" && typeof val2 === "object") {
    if (!((Array.isArray(val1) && Array.isArray(val2)) || (!Array.isArray(val1) && !Array.isArray(val2)))) return false;
    if (Object.keys(val1).length !== Object.keys(val2).length) return false;
    for (const key in val1) {
      if (!getIsDeepEqual(val1[key], val2[key])) return false;
    }
    return true;
  }
  else if (typeof val1 === "number" && typeof val2 === "number") {
    if (isNaN(val1) && isNaN(val2)) return true;
    else return val1 === val2;
  }
  else return val1 === val2;
}

// console.log(1, getIsDeepEqual(1, 1));
// console.log(2, getIsDeepEqual(1, "1"));
// console.log(3, getIsDeepEqual(null, null));
// console.log(4, getIsDeepEqual(null, undefined));
// console.log(5, getIsDeepEqual([], []));
// console.log(6, getIsDeepEqual({}, {}));
// console.log(7, getIsDeepEqual({}, []));
// console.log(8, getIsDeepEqual(NaN, NaN));
// console.log(9, getIsDeepEqual(
//   { a: 123, b: { c: [4, 5, 6] } },
//   { a: 123, b: { c: [4, 5, 6] } }
// ));
// console.log(10, getIsDeepEqual(
//   { a: 123, b: { c: [4, 5, 6] } },
//   { b: { c: [4, 5, 6] } }
// ));
// console.log(11, getIsDeepEqual(
//   { a: 123, b: { c: [4, 5, 6] } },
//   { a: 123, b: { c: [4, "5", 6] } }
// ));
// console.log(12, getIsDeepEqual(
//   [1, 2, [3, 4]], [1, 2, [3, 4]]
// ));
// console.log(13, getIsDeepEqual(
//   [1, 2, [3, 4, { a: "abc" }]],
//   [1, 2, [3, 4, { a: "abc" }]]
// ));
// console.log(14, getIsDeepEqual(
//   { a: 123, b: { c: [4, 5, 6, [7, 8]] } },
//   { a: 123, b: { c: [4, 5, 6, [7, 8]] } }
// ));
// console.log(15, getIsDeepEqual(
//   { a: 123, b: { c: [4, 5, 6, "[7, 8]"] } },
//   { a: 123, b: { c: [4, 5, 6, [7, 8]] } }
// ));
// console.log(16, getIsDeepEqual(
//   [[1]], [[1]]
// ));
// console.log(17, getIsDeepEqual(
//   { at: 1, test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } },
//   { at: 1, test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }
// ));
// console.log(18, getIsDeepEqual(
//   { test: [1, 2, 3, { hi: "hello" }, undefined], obj: { test: "12" } },
//   { test: [1, 2, 3, { hi: "hello" }, null], obj: { test: "12" } }
// ));
// console.log(19, getIsDeepEqual(
//   { at: 1, bt: 2, test: [1, 2, 3, { hi: "hi" }], obj: { test: "12" } },
//   { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello" }], obj: { test: "12" } }
// ));
// console.log(20, getIsDeepEqual(
//   { at: 1, bt: 2, test: [1, 2], obj: { test: "12" } },
//   { at: 1, bt: 2, test: [1, 2, 3], obj: { test: "12" } }
// ));
// console.log(21, getIsDeepEqual(
//   { a: 1, obj: { test: "12" }, b: 2 },
//   { a: 1, b: 2, obj: { test: "12" } }
// ));                       