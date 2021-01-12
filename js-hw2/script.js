function getSum(a, b) {
    return a + b;
}
let result = getSum(6, 12);
console.log('getSum', result);


let arrowFunc = (a, b) => {
    return a + b;
};
console.log('getSum', arrowFunc (3, 7));


function Hello2(name = 'Гость') {
console.log('Привет, ' + name);
};   
Hello2('Василий');


function getIndex(str, targetString) {
    return str.indexOf(targetString);
};

const index1 = getIndex('Hello, my name is', 'is');
const index2 = getIndex('Hello, my name is', 'name');

console.log('index1:',index1,'index2:',index2);




function stringValidation(test) {

    if(typeof test === 'string' & test.length > 3) {
        console.log(test);
    }else if( test.length < 3) {
        console.log('Ошибка. Минимальная длина - 3');
    }else{
        console.log(typeof test, 'Ошибка. Не тот тип данных')
    }
};
const test = 'Hello';

stringValidation(test);




