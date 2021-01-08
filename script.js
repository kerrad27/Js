
for ( let i = 1; i <= 50; i++) {
    console.log('i:', i);
}

let a = 1
while ( a <= 50) {
    console.log(' a: ', a++);
}


let sum = 0;
for (let c = 0; c < 5; c++) {
    sum += c;

}
    console.log('hw2:',sum);


let res = 0;

for(let d = 0; d < 20; d += 2) {
    res = res + d;
}
    console.log('hw3:',res);   


  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log('FizzBuzz');
    }
 
    else if (i % 2 === 0) {
        console.log('Fizz');
    }
    else {
        console.log('Buzz');
    }
 
}