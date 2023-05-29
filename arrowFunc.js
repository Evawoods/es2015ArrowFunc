function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//   rewritten

const double = arr => arr.map(val => val * 2)

// second problem 

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//   rewritten

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)