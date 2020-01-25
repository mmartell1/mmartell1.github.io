
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

//convert to binary
//if (binary < 1)
//{final sign bit = 1 (?)\\\\\}
//scientific notation
//substring mantissa to leave out first 1
//add 0's at end if necessary
//exponent + 128
  var firstPart = "";
  var secondPart = -1;
  var decimalValue = floatToConvert;
  var output32BitScientificNotation = "";
  var finalSignBit;
  //var output32BitScientificNotation = "10100011001100001000010 10010101 0";
  if (Number.isInteger(floatToConvert)) {
    //output32BitScientificNotation = "yup";
    //?? is this needed? just else statement?
  } else {
    //set decimalValue equal to floatToConvert, truncated
    secondPart = decimalValue - Math.trunc(decimalValue);
    decimalValue = Math.trunc(decimalValue)
    //some boolean about secondPart?
      //no- make secondPart -1, change to decimal part here
    //output32BitScientificNotation = "nope";
    //output32BitScientificNotation = decimalValue;
  }

  while (decimalValue != 0) {
    firstPart = (decimalValue % 2) + firstPart;
    if (decimalValue % 2 == 1) {
      decimalValue--;
    }
    decimalValue = decimalValue / 2;
  }
//we have: a firstPart

  if (secondPart != -1){
    //while: <22 or: for every number
    //secondPart * 2, if >1, 1, else, 0
    //add 1 or 0 to firstPart as strings
    //25

    firstPart += ".";
    while (firstPart.length < 25 ) {
      if (secondPart * 2 < 1){
        firstPart += 0;
      } else {
        firstPart += 1;
      }
      secondPart *= 2;
      secondPart--;
    }

  } else {
    //don't do anything??
  }

  //output32BitScientificNotation = firstPart;
  //we have: firstPart, which now includes the decimal if necessary
  //firstPart = the binary representation
  // if: less than 1, final sign bit = 1, else, 0
  //start at left of firstPart and find index of first 1
  //need to find distance between decimal points of binary rep and binary scientific notation
  //set exponent

  if (parseInt(firstPart) < 1){
    finalSignBit = 1;
  } else {
    finalSignBit = 0;
  }

  var firstOneIndex = -1;
  var decimalPointIndex = -1;

  for (index = 0; index < firstPart.length; index++){
    if ((firstPart.charAt(index)).localeCompare(".") == 0) {
      decimalPointIndex = index;
    }
  }
  //CHANGE TO WHILE LOOP: STOP AT FIRST 1
  var index = 0;
  while (index < firstPart.length && firstOneIndex == -1){
    if ((firstPart.charAt(index)).localeCompare("1") == 0) {
      firstOneIndex = index;
    }
    index++;
  }


  //output32BitScientificNotation = decimalPointIndex + " " + firstOneIndex;


  //find index of decimal point of firstPart (ex: 22)
  //index of first 1 (ex: 0)
  //(index of decimal point - index of first 1) - 1 = exponent

  firstPart = firstPart.substring (0, decimalPointIndex) + firstPart.substring (decimalPointIndex + 1);
  var exponent = decimalPointIndex - firstOneIndex - 1;

  exponent += 128;

  //convert exponent to binary
  var binaryExponent = "";
  while (exponent != 0 && binaryExponent.length < 8) {
    binaryExponent = (exponent % 2) + binaryExponent;
    if (exponent % 2 == 1) {
      exponent--;
    }
    exponent = exponent / 2;
  }


  output32BitScientificNotation = firstPart.substring(1) + binaryExponent + finalSignBit;

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1 <-- 24 (length), 23 bits
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
//                        101000110011000010000.10
// ... so                 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010 <-- 23 bits                   10010101
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
