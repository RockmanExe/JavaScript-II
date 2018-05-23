const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
let gru=function(param1, cb){
  return cb(param1,param2);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
cb(arr[0]);
}
console.log(items,cb)

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
cb(arr.length);}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
cb(arr[arr.length-1]);}
last(last,console.log)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
cb(x+y);}
sumNums(items, console.log)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
cb(x*y);}
multiplyNums(items,console.log)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}
contains('Pencil', items, console.log)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
