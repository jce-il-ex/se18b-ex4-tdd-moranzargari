var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  return a+b;
}

function mult (a, b) {
  return a*b;
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('mult should return the addition of two numbers', function (t) {
  t.equal(2, mult(1, 2)); // make this test pass by completing the mult function!
  t.end();
});