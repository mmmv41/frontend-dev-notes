let exampleProduct = {
    items: ['Coffee', 'Donut'],
    producer: 'Yushi'
}; 

/* 객체를 단순하게 받아내는 매개변수 사용 시 */
function displayProduct(obj) {

    // 1. obj. 을 항상 명시해야 함
    console.log(obj.producer);
    console.log(obj.items);

    // 2. 인수로 던져진 객체에 필요한 프로퍼티가 없을 경우(undefined가 나옴) 
    console.log(obj.brand);
}

/* 매개변수에서 객체 구조분해 할당 적용 시 */
function displayProduct2(producer = 'sungchan', items = [], brand = 'SM') {
    console.log(producer);
    console.log(items);
    console.log(brand);
}

displayProduct(exampleProduct);