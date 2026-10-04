function deepEqual(objA,objB) {
    if (objA === objB) {
        return true
    }

    if (!objA || typeof objA !== 'object' || objB == null || typeof objB !== 'object' ) {
        return false
    }

    let keyA = Object.keys(objA);
    let keyB = Object.keys(objB);


    if (keyA.length !== keyB.length) {
        return false;
    }

    for (let key of keyA) {
        if (!keyB.includes(key) || !deepEqual(objA[key], objB[key])) {
            return false;
        }
    }

    return true
}
console.log(deepEqual({ a: 1, b: { c: 2}}, { a: 1, b: { c: 2 }})) //true
console.log(deepEqual({ a: 1, b: { c: 2}}, { a: 1, b: { c: 3 }})) //false
console.log(deepEqual({ a: 1}, { a: 1, b: 2})) //false 



