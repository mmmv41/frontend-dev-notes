// 1. 숫자 1, 문자 '1' 비교 (==, ===)
console.log(`1 == 1: ${1 == 1}`);
console.log(`1 == true: ${1 == true}`);
console.log(`1 == '1': ${1 == '1'}`);   // 동등 비교 (타입은 다르지만 값은 같은지) - true
console.log(`1 === '1': ${1 === '1'}`); // 동일 비교 (암묵적 형변환을 하지 x, 타입을 포함하여 비교) - false

// 2. NaN는 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN: ${NaN == NaN}`);   // false
console.log(`NaN === NaN: ${NaN === NaN}`); // false

// 3. 일치하지 않는 값 비교 (!=, !==)
console.log(`1 != '1': ${1 != '1'}`);
console.log(`1 !== '1': ${1 !== '1'}`);     // === 의 반대 - true

