// ======================================================================= // 
//                            Array Steamroller                            //
// ======================================================================= //
//                                                                         //
// Instructions:                                                           //
// ----------------------------------------------------------------------- //
// Flatten a nested array. You must account for varying levels of nesting. //
//                                                                         //
// function steamrollArray(arr) {                                          //
//   // I'm a steamroller, baby                                            //
//   return arr;                                                           //
// }                                                                       //
//                                                                         //
// steamrollArray([1, [2], [3, [[4]]]]);                                   //
//                                                                         //
// // prints out:                                                          //
//                                                                         //
// [1,2,3,4]                                                               //
// ----------------------------------------------------------------------- //

// -------------------------------------------------------- //
//                  Version with 'for' loop                 //
// -------------------------------------------------------- //

var newArray = [];

var steamrollArray = function (array) {
  for (var item of array) {
    if (Array.isArray(item)) {
        steamrollArray(item);
      }
      else {
        newArray.push(item);
      }
  }
  return(newArray);
};

var array = [1, [2], [3, [[4]]]];

console.log(steamrollArray(array));

// -------------------------------------------------------- //
//       Version with 'forEach' and 'ternary' operator      //
// -------------------------------------------------------- //

var array = [1, [2], [3, [[4]]]];
var newArray = []

var steamrollArray = function (arr) {
  arr.forEach(function (item) {
    Array.isArray(item) ? steamrollArray(item) : newArray.push(item);
  });
};

steamrollArray(array);
console.log(newArray);

// -------------------------------------------------------- //
//      Version with 'forEach' and 'if/else' statement      //
// -------------------------------------------------------- //

var steamrollArray = function (arr) {
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      steamrollArray(item);
    }
    else {
      newArray.push(item);
    }
    return newArray;
  });
};

steamrollArray(array);
console.log(newArray);