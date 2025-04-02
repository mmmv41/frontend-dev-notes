function Parent(name) { // 부의 역할 (함수만 만들어도 prototype을 가진다)
    this.name = name;
}

console.log(Parent.prototype);

// 부모 프로토타입
Parent.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
}

// 자식 생성자
function Child(name, age) {
    Parent.call(this, name);        // 자바의 super() 개념
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.sayAge = function() {
    console.log(`I'm ${this.age} years old`);
}

const child = new Child('홍길동', 20);
child.sayHello();
child.sayAge();