var $display = document.querySelector('.display-number');



function alertNumberPressed(event) {
  var  button = event.target;
  var  number = Number(button.textContent);
  $display.textContent = number;
}


[].forEach.call(document.querySelectorAll('.keypad-button.number'),
function(element){
  element.addEventListener('click', alertNumberPressed);
}, false);

function alertZeroPressed(event) {
  var  button = event.target;
  var  number = Number(button.textContent);
  $display.textContent = number;
}


[].forEach.call(document.querySelectorAll('.keypad-button.zero'),
function(element){
  element.addEventListener('click', alertZeroPressed);
}, false);



function alertOperatorPressed(event) {
  var button = event.target;
  var operator = Number(button.textContent);
  $display.textContent = operator;
}

[].forEach.call(document.querySelectorAll('.keypad-button.operator'),function(element){
  element.addEventListener('click', alertOperatorPressed);
}, false);
