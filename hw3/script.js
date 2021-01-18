
let sumq = +prompt("Введите число",'');
console.log(sumq);
let sumN = 0;
let funcN = (number) => {
for ( let i = 1; i <= number; i++) {
     sumN += i ** 2;
}
};
funcN(sumq);
console.log('sumN:',sumN)


//     let x = 0;
// for(let y = 1; y < 5; y++) {
//   x += y**2;
// }
// console.log('x',x);



let arr = [3, 5, 12, 9, 23, 93, 17]
let arrSum = arr.filter(item => item > 2 && item < 20);
console.log(arrSum);
let sum = 0;
arrSum.forEach(function(item) {
    sum += item;
});
console.log('sum:',sum);


const arrBox1 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let sumArr1 = 0;
arrBox1.forEach((item) =>{
    item.forEach(el =>{
        if (typeof el === 'number' && el % 2 === 0){
            sumArr1 += el;
        }
    })
});
console.log('sunArr! :', sumArr1);


const arrBox = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let sumArr = 0;
arrBox.forEach((item) =>{
    for(let i of item){
        if(typeof i === 'number' && i % 2 ===0){
            sumArr += i;
        }
    }
});
console.log('sumArr:',sumArr);


// const arr1 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
// let fillteredArr = arr1.map(item => {
//     return item.filter(el => typeof el === 'number' && el % 2===0 )
// });
// console.log('fillteredArr:', fillteredArr);


const obj ={};

let key = prompt('введите ключи');
while (!key){
    key = prompt();
}
let value = prompt('введите значение','');

const checkValue = (key, value, object) => {
    if (key in obj){
        console.log('уже есть :', key);
    } else {
        object[key] = value;
    }
}

checkValue(key, value, obj);
checkValue(key, value, obj);