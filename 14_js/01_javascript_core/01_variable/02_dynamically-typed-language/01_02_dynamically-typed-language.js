var test;
console.log(typeof test);       // undefined

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);   

test = Symbol();
console.log(typeof test);       // symbol

test = {};
console.log(typeof test);       // object

test = [];
console.log(typeof test);       // object

test = function() {};
console.log(typeof test);       // function
