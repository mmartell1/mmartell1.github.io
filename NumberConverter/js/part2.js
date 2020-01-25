function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    var decimalValue = SignedDecimalInt;
    var outputValue = "";
    while (decimalValue != 0) {
      outputValue = (decimalValue % 2) + outputValue;
      if (decimalValue % 2 == 1) {
        decimalValue--;
      }
      decimalValue = decimalValue / 2;
    }
    while (outputValue.length < 24) {
      outputValue = 0 + outputValue;
    }
    //                    010110101000110110011101
    // var outputValue = "010110101000110110011101";
    //                                 101001010111001001100011
    //                                 101001010111001001100010
    //var outputValueTwosComplement = "101001010111001001100011";
    var outputValueTwosComplement = "";
    for (index = 0; index < outputValue.length; index++){
      if (outputValue.charAt(index) == 1){
        outputValueTwosComplement += 0;
      } else {
        outputValueTwosComplement += 1;
      }
    }
    end = false;
    index = outputValue.length - 1;
    while (end == false && index >= 0) {
      if (outputValueTwosComplement.charAt(index) == 0){
        outputValueTwosComplement = outputValueTwosComplement.substring(0, index) + 1 + outputValueTwosComplement.substring(index + 1);
        //outputValueTwosComplement.charAt(index) == 1;
        end = true;
      } else {
        outputValueTwosComplement = outputValueTwosComplement.substring(0, index) + 0 + outputValueTwosComplement.substring(index + 1);
        //outputValueTwosComplement.charAt(index) = 0;
      }
      index--;
    }

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
