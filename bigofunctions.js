'use strict';

//O(1)
function countTo10 (){
  for(var i = 0; i <= 10; i++) {
    console.log(i);
  };
};
countTo10();


//O(n)
function countTo(number) {
  for(var i = 0; i <= number; i++) {
    console.log(i);
  };
};
countTo(20);


//O(n2)
var string = "Mississippi";

function containsDups(string) {
  for(var i = 0; i <= string.length; i++){
    for (var j = 1; j <=string.length; i++){
      if (i === j) {
        console.log('true');
      }
      else {
        console.log('false');
      }
    }
  }
};
containsDups(string);
