function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = document.getElementById("1_UnsignedIntBaseToConvertFrom").value;
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    var decimalValue = 0;
    decimalValue = UnsignedInt.substring(0, 1);
    decimalValue = parseInt(decimalValue);
    for (i =  1; i < UnsignedInt.length; i++){
      decimalValue = (decimalValue * UnsignedIntBaseFrom) + parseInt(UnsignedInt.substring(i, i+1));
    }

    var outputValue = "";

    if (UnsignedIntBaseTo == 10){
      outputValue = decimalValue;
    } else {
      while (decimalValue != 0) {
        outputValue = (decimalValue % parseInt(UnsignedIntBaseTo)) + outputValue;
      }
    }


  //var outputValue = "11111111";
  //decimalValue.toString(UnsignedIntBaseTo)

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
