// 콜백함수1
function increase(value) {
    return value + 1;
}

// 콜백함수2
function decrease(value) {
    return value - 1;
}

// 고차함수
function apply(func, value) {
    return func(value);
}

console.log(apply(increase, 5));    // increase 함수가 콜백
console.log(apply(decrease, 5));    // decrease 함수가 콜백

// 둘이 순서를 바꿔서 빼면 내림차순 -> [5, 4, 3, 2, 1]
console.log([3, 2, 1, 5, 4].sort(function(left, right) {return right - left;}));
console.log([3, 2, 1, 5, 4].sort((left => right )));