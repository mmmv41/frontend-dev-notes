/* null 병합 연산자 */

var test = null ?? '기본값';      // null이면 오른쪽 값이 나오게 
console.log('test:', test);     // console.log 는 매개변수를 두개 이상 쓰면 중간에 띄어쓰기를 포함해서 문자열 이어붙이기 가능

var value1 = '' || '기본 값';
var value2 = '' ?? '기본 값';        // '' 이 남는다.
console.log('value1:',value1);     // value: 기본 값 
console.log('value2:',value2);     // value: 