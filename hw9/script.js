function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  console.log( fib(5) ); 
  console.log( fib(9) ); 

  function fib1(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(fib1(34))

// task 2
function sumN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumN(46));


  function sumN2(n) {
    if (n == 1) return 1;
    return n + sumN2(n - 1);
  }
  
  console.log(sumN2(72));

//  task 3

function printNumbers(from, to) {
    let current = from;
  
    let time = setInterval(function() {
      console.log('setInterval:', current);
      if (current === to) {
        clearInterval(time);
      }
      current++;
    }, 1000);
  }

 printNumbers(1, 6);


  function printNumbers2(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log('setTimeout:', current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }

 printNumbers2(3, 12);

  
// task 4

let i = 0;
function sec(){
i++;
console.log("Прошло " + i + " сек.");
if(i === 5){
clearInterval(id);
}
}

id = setInterval(sec,1000);
//task5


const linkList = document.getElementsByClassName ('li');
const input = document.getElementById ('inp');
const button = document.getElementById ('sum');
const elements = [];
for (const iterator of linkList) {
    if (!isNaN(+iterator.innerText)) {
        elements.push(iterator.innerText)
    };
};
const summ = elements.reduce ((acc, item) => {
    return +acc + +item
})

button.addEventListener('click', () => input.value = `${elements.join(' + ')} = ${summ}`);

