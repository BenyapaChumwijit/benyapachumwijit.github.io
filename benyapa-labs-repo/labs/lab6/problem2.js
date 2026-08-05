function readInput() {
  var value;
 
  for (
    value = Number(prompt("Enter an integer (a negative integer to quit):"));
    !(value < 0 || value >= 0);
    value = Number(prompt("Enter an integer (a negative integer to quit):"))
  ) {
  }
 
  return value;
}
 
function displayStats(list) {
  var sum = 0;
  var min = 0;
  var max = 0;
 
  if (list.length > 0) {
    min = list[0];
    max = list[0];
  }
 
  for (var i = 0; i < list.length; i++) {
    sum = sum + list[i];
 
    if (list[i] < min) {
      min = list[i];
    }
    if (list[i] > max) {
      max = list[i];
    }
  }
 
  var average = 0;
  if (list.length > 0) {
    average = sum / list.length;
  }

  var listText = "";
  for (var j = 0; j < list.length; j++) {
    if (j > 0) {
      listText = listText + ",";
    }
    listText = listText + list[j];
  }
 
  alert(
    "For the list " + listText +
    ", the average is " + average.toFixed(2) +
    ", the minimum is " + min +
    ", and the maximum is " + max
  );
}
 
var positiveNumbers = [];
 
for (var number = readInput(); number >= 0; number = readInput()) {
  positiveNumbers.push(number);
}
 
displayStats(positiveNumbers);