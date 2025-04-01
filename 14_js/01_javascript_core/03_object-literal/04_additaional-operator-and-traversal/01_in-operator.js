var student = {
    name: '유관순', 
    age: 15,
    test: undefined
};

student[sym] = '추가';
console.log(student);           // Symbol 이 프로퍼티로 추가되지만 for-in 문에서는 숨겨진다.

console.log('name' in student);s
console.log('age' in student);
console.log('test' in student);

// for-in 문(프로퍼티 순회 용도)
for(var key in student) {
    console.log(`key: ${key}`);
    console.log(`student[${key}]: ${student[key]}`);
    console.log(`<td>${student[key]}</td>`);
} 
