(function(){
  'use strict';

  var calculation = 0;
  var displayCalculation = "0"
  var pendingOperation;
  var $display = document.querySelector('display-number');


  function numberButtonPressed(event){
    var number = Number(event.target.textContent);
    if(pendingOperation !== undefined){
      switch (pendingOperation) {
        case "+":
          calculation += number;
          break;
      }
      pendingOperation = undefined;

    } else {
      displayOrConcatenateNumber(number);
    }
}

  function decimalButtonPressed(event) {

  }


  function operatorButtonPressed(event) {
    pendingOperation = event.target.textContent;
  }

function displayOrConcatenateNumber(number) {
  if(calculation === 0) {
    calculation = number;
    displayedCalculation = String(number);
    $display.textContent = number;
  } else {
    calculation = Number(displayedCalculation + number);
    displayedCalculation = displayedCalculation + number;

  }
  $display.textContent = displayedCalculation;

}



  [] forEach.call(document.querySelectorAll('.keypad-button.number'), function(element){
    element.addEventListener('click', numberButtonPressed);
  }, false);

  [] forEach.call(document.querySelectorAll('.keypad-button.operator'), function(element){
    element.addEventListener('click', operatorButtonPressed);
  }, false);


  document.querySelector('decimal').addEventListener('click', decimalButtonPressed);

})();



































// function alertButtonValue(event) {
//   var button = event.target;
//   var number = button.textContent;
//   alert(number);
// }
//
// [].forEach.call(document.querySelectorAll('.word'), function(element){
//   element.addEventListener('click', alertButtonValue);
// }, false);
//
//
//
// function alertNumber(event) {
//   var button = event.target;
//   var number = Number(button.textContent);
//   alert(number);
// }
//
// [].forEach.call(document.querySelectorAll('.number'), function(element){
//   element.addEventListener('click', alertNumber);
// }, false);
//
//
// function operatorPressed(event) {
//   var button = event.target;
//   var operator = Number(button.textContent);
//   alert(operator);
// }
//
// [].forEach.call(document.querySelectorAll('.operator'), function(element){
//   element.addEventListener('click', alertoperatorPressed);
// }, false);
//
// function equalsPressed(event) {
//   var button = event.target;
//   var equals = Number(button.textContent);
//   alert(equals);
// }
//
// [].forEach.call(document.querySelectorAll('.equals'), function(element){
//   element.addEventListener('click', equalsPressed);
// }, false);
