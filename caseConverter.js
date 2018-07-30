// ======================================================================== // 
//                             Case Converter                               //
// ======================================================================== //
//                                                                          //
// Instructions:                                                            //
// -----------------------------------------------------------------------  //
// Write a function caseConvert that accepts two arguments. The first is a  //
// string, the second is type. If the type is "camelcase" then convert the  //
// string to camelcase (each word except the first is capitalized, no       //
// spaces). If type is "snakecase" then convert the string to snakecase     //
// (each word is separated by a - and all lowercase). As a bonus, accept a  //
// string or an array. If it's an array, use .join and proceed accordingly. //
//                                                                          //
// var caseConvert = function (str, conversionType) {                       //
//                                                                          //
//     //Your code here!!                                                   //
//                                                                          //
//     return convertedStr;                                                 //
//                                                                          //  
// };                                                                       //
// ------------------------------------------------------------------------ //                                                             //

var caseConvert = function (str, conversionType) {
    var str = str.toLowerCase();

    if (conversionType === 'camelcase') {
        var letters = str.split('');

        var newArray = letters.map(function(letter, i) {
        if (letters[i - 1] === ' ') {
            return letter.toUpperCase();
        } 
        else if (letter === ' ') {   
        }
        else {
            return letter;
        }
        });

        return newArray.join('');
    }
    else if (conversionType === 'snakecase') {
        str = str.replace(/ /, '-');
    }
    return str;
};

var str = 'Hello world';

// -------- Test cases: ---------

var conversionType = 'camelcase';

var conversionType = 'snakecase';

// --------- Call + Log the Function ---------

caseConvert(str, conversionType);

console.log(caseConvert(str, conversionType));