const arr = [1, -1, 2];
const arr2 = arr.concat(5);
const arrMult = arr2.map((val) => val * 2);
// console.log(arr);
// console.log(arr2);
// console.log(arrMult);

const t = [1, 2, 3, 4, 5];
const [first, ...sho] = t;
console.log(first);
console.log(sho);
