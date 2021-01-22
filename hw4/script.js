function bindFunc (fn, context, ...arg){
   return fn.bind(context, ...arg)
}
function func(name, surname) { 
    console.log(this.a,name + surname)
};
const context = {
    a: 'something'
}
bindFunc(func, context)('amd,','intel')

// function bindFunc(fn, context, ...arg) {
//     return fn.bind(context, arg)
//    }


const objectA = {
    a:1, 
    b:2,
    c:3,
}

let total = 0;
const funcObj = function() {
  for (value in objectA)
    if (objectA[value] > 0)
    total += objectA[value];
    else (console.log('меньше 0'))
}
funcObj();
console.log('total',total);


function getNewArray() {
    const arr = arguments[0]; // достаем аргумент, который передали в функцию (valObject0.values)
    console.log('some:',arguments[0])
    return arr.filter(item => { // фильтруем
      return typeof item === 'number' // проверяем, что число является типом 'number'
        && item % 2 === 0 // четное
        && item > 2 // больше 2
        && item < 10; // и меньше 10
    })
  }
  const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
  }
  const result = getNewArray.call(this, valObject0.values); // привязываем контекст к функции и передаем массив аргументом
  
  console.log(result);


