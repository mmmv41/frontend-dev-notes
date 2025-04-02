function Student(name, age) {
    // 단순 함수일 때 내부의 this.은 전역 객체를 말한다. 
    this.name = name;       // 생성될 객체가 아님. 전역 객체 
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
    
    return this.getInfo;    // 반환을 적어도, 적지 않아도 됨.
}

/* new 연산자를 안붙이고 일반 함수로 썼을 때 내부의 this는 전역 객체이며 함수명만 대문자로 시작하는 상태 */
const student = Student('강감찬', 35);      // 일반 함수로써 활용 시 
console.log(student);

// console.log(this);          // 가짜 전역 객체
// console.log(globalThis);   

function Dog(name, age) {
    console.log('new.target:', new.target);

    this.name = name;           // 여기서의 this는 생성자 함수로 만들어질 객체
    this.age = age;
}
const dog = new Dog('뽀삐', 3);
console.log(dog);