console.log(Boolean('JavaScript'));
console.log(Boolean(''));           // false         
console.log(Boolean(1));
console.log(Boolean(0));            // false
console.log(Boolean(NaN));          // false
console.log(Boolean(Infinity));
console.log(Boolean(null));         // false
console.log(Boolean({}));
console.log(Boolean([]));

// !! 붙이면 Boolean 이 된다. 
console.log(!! 'JavaScript');
console.log(!! '');           // false         
console.log(!! 1);
console.log(!! 0);            // false
console.log(!! NaN);          // false
console.log(!! Infinity);
console.log(!! null);         // false
console.log(!! {});
console.log(!! []);