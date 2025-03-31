/* 단축 평가 구문 */

/* 1. OR의 경우 */
// 논리 연산의 결과를 결정 지어줄 항이 남게 된다.
console.log('apple' || 'banana');   // t || t -> 앞에만 봐도 true 이기 때문에, 앞의 값이 남게된다. (truthy만 남게됨) - apple
console.log('' || 'banana');        // true 의 결정을 주는 banana가 남게 된다. - banana
console.log('apple' || false);      // apple이 truthy 하기 때문에, apple만 보고 연산 종료. - apple

/* 2. AND의 경우 */
// t && t 둘다 t여야 t이기 때문에, 둘다 t일 경우 두번째가 남게 된다.
console.log('apple' && 'banana');   // banana
console.log(false && 'banana');     // false
console.log('apple' && false);      // false

/* 3. 단축 평가 구문 */
var num = 3;
num % 2 == 0 && console.log('짝수입니다.');     // 조건식이 true면, 두번째가 실행되게 - false
num % 2 == 0 || console.log('홀수입니다.');     // 조건식이 f일때, 두번째가 실행되게 - 홀수입니다.

// if(num % 2 == 0) {
//     console.log('짝수입니다.');
// } else {
//     console.log('홀수입니다.');
// }