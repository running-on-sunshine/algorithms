// ======================================================================== // 
//                          Credit Card Validator                           //
// ======================================================================== //
//                                                                          //
// Instructions:                                                            //
// -----------------------------------------------------------------------  //
// Write a JavaScript program to validate that a credit card number:        //
//                                                                          //
// It must have 16 digits, unless it starts with 37 or 34. Then, and only   //
// then, it MUST have 15 digits                                             //
//                                                                          //
// It must start with one of the folliowing. Print off "valid" and the      //
// type of card.                                                            //                                       
//                                                                          //
// 6011 = Discover Card                                                     //
// 37 or 34 = American Express                                              //
// 4 = Visa                                                                 //
// 50-55 = MasterCard                                                       //
// ------------------------------------------------------------------------ //

var creditCardValidator = function (number) {
    var digit = 16;

    var validMsg = 'Card is valid. ';
    var invalidMsg = 'Card is invalid.';

    var cardTypeMsg = 'Card type: ';
    var cardType = ['Discover Card', 'American Express', 'Visa', 'MasterCard'];

    if (number.length === digit-1) {
        if (number.startsWith(('37') || ('34'))) {
            console.log(validMsg + cardTypeMsg + cardType[1]);
        }
        else {
            console.log(invalidMsg);
        }
    }
    else if (number.length == digit) {
        if (number.startsWith('6011')) {
            console.log(validMsg + cardTypeMsg + cardType[0]);
        }
        else if (number.startsWith('4')) {
            console.log(validMsg + cardTypeMsg + cardType[2]);
        }
        else if (number.startsWith(('50') || ('51') || ('52') || ('53') || ('54') || ('55'))) {
            console.log(validMsg + cardTypeMsg + cardType[3]);
        }
        else {
            console.log(invalidMsg);
        }
    }
    else {
        console.log(invalidMsg);
    }
};

// ---------- Test cases:----------
// var number = 'aaaabbbbccccdddd';
// var number = cardNum.toString();

// var number = prompt('Enter card number: ');

var number = '4034567891011180'

creditCardValidator(number);