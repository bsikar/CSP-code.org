// Creates a new list of the length given and with the same value repeated
// length {number} - the length of the list to create
// value {*} - the value to appear in every item of
function fill(length, value){
  var returnList = [];
  for(var i = 0; i < length; i++){
  appendItem(returnList, value);
  }
  return returnList;
}

console.log("fill 10, *" + fill(10, '*'));
console.log("fill 0, *" + fill(0, '*'));
console.log("fill 2, 322" + fill(10, 322));


// Write three different tests for the fill function

function multiplyBy(list, number){
  var returnList = [];
  // Write your code here
  for (var i = 0; i < list.length; ++i) {
  returnList.push(list[i] * number);
  }
  return returnList;
}

console.log("Multiply [1,2,3] by 2 " + multiplyBy([1,2,3],2));
console.log("Multiply [10,20,30] by 5 " + multiplyBy([10,20,30],5));
console.log("Multiply [-1,-2,-3] by 3 " + multiplyBy([-1,-2,-3],3));

// Returns a copy of the list given but in reverse order
// list {list} - the list to be reversed
// return {list} - a copy of the original list in reverse order
function reverse(list){
  return list.reverse();
}

console.log("Reverse [1,2,3]" + reverse([1,2,3]));
console.log("Reverse ['yes','no','maybe']" + reverse(["yes","no","maybe"]));

