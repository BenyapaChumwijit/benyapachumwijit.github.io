function readInput() {
  var value;

  for (
    value = Number(prompt("Enter a positive integer:"));
    !(value > 0 && value === Math.floor(value));
    value = Number(prompt("Enter a positive integer:"))
  ) {
  }

  return value;
}

function findPrimes(limit) {
  var primes = [];

  for (var i = 2; i <= limit; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

function displayPrimes(primes, limit) {
  var listText = "";
  for (var k = 0; k < primes.length; k++) {
    if (k > 0) {
      listText = listText + ",";
    }
    listText = listText + primes[k];
  }

  alert("For n = " + limit + " prime numbers are " + listText);
}

var n = readInput();
var primeList = findPrimes(n);
displayPrimes(primeList, n);