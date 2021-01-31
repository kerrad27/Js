
const user = ['Vasya','Petya','Alexey'];
const removeUser = (array, index) => array.splice(index, 1);
removeUser(user, 0);
console.log(user);


const myBoxes = document.getElementById('boxes');
    myBoxes.style.width = '350px';
    myBoxes.style.height = '250px';
    myBoxes.style.position = 'relative';
    myBoxes.style.padding = '50px';


let divBoxOne = document.createElement('div');
    divBoxOne.style.position ='relative';
    divBoxOne.className = 'divBoxOne';
    divBoxOne.style.height ='75px';
    divBoxOne.style.background ='red';
    divBoxOne.style.width ='75px';
    divBoxOne.style.top ='10%';
    divBoxOne.style.left ='20%';
        myBoxes.append(divBoxOne);


let divBoxTwo = document.createElement('div');
    divBoxTwo.className = 'divBoxTwo';
    divBoxTwo.style.width ='75px';
    divBoxTwo.style.height ='75px';
    divBoxTwo.style.background ='blue';
    divBoxTwo.style.zIndex ='1';
    divBoxTwo.style.left ='33%';
    divBoxTwo.style.position = 'relative';
        myBoxes.append(divBoxTwo);


let divBoxThree = document.createElement('div');
    divBoxThree.className = 'divBoxThree';
    divBoxThree.style.width ='75px';
    divBoxThree.style.height ='75px';
    divBoxThree.style.background ='lightGreen';
    divBoxThree.style.left ='45%';
    divBoxThree.style.bottom ='10%';
    divBoxThree.style.position = 'relative';
        myBoxes.append(divBoxThree);


const myHolder = document.getElementsByClassName('holder');
for (let objHolder of myHolder) {
    objHolder.style.display = "flex";
    objHolder.style.border = "4px solid black";
    objHolder.style.borderTopRightRadius = "15px";
    objHolder.style.borderTopLeftRadius = "15px";
    objHolder.style.width = "500px";
    objHolder.style.height = "100px";
    objHolder.style.flexWrap = "wrap";
    objHolder.style.overflow = "auto";
}


let div1 = document.createElement('div');
let dvOne = document.getElementsByClassName("holder");
    div1.innerText = "1";
    div1.className = "item";
    div1.style.fontSize = "xx-large";
    div1.style.textAlign = "center";
    div1.style.width = "50%";
    div1.style.height = "50%";
    div1.style.background = "#F86B20";
    div1.style.alignItems = "center";
    div1.style.order = "-2";
    div1.style.display ="flex";
    div1.style.alignItems = "center";
    div1.style.justifyContent= "space-around";
for (let obj of dvOne) {
        obj.append(div1);
}


let div2 = document.createElement("div");
let dvTwo = document.getElementsByClassName("holder");
    div2.innerText = "2";
    div2.className = "item";
    div2.style.fontSize = "xx-large";
    div2.style.width = "33.333%";
    div2.style.height ="50%";
    div2.style.textAlign = "center";
    div2.style.background = "#0B7ECA";
    div2.style.display ="flex";
    div2.style.alignItems = "center";
    div2.style.justifyContent= "space-around";
for (let obj of dvTwo) {
    obj.append(div2);
}


let div3 = document.createElement("div");
div3.innerText = "3";
div3.className = "item";
div3.style.textAlign = "center";
div3.style.fontSize = "xx-large";
div3.style.height = "50%";
div3.style.width = "33.333%";
div3.style.background = "#7D0BDA";
div3.style.order = "-1";
div3.style.display ="flex";
div3.style.alignItems = "center";
div3.style.justifyContent= "space-around";
let dvThree = document.getElementsByClassName("holder");
for (let obj of dvThree) {
    obj.append(div3);
}

let div4 = document.createElement("div");
div4.innerText = "4";
div4.className = "item";
div4.style.fontSize = "xx-large";
div4.style.textAlign = "center";
div4.style.width = "33.333%";
div4.style.height ="50%";
div4.style.background = "#079B0E";
div4.style.display ="flex";
div4.style.alignItems = "center";
div4.style.justifyContent= "space-around";
let dvFour = document.getElementsByClassName("holder");
for (let obj of dvFour) {
    obj.append(div4);
}

let div5 = document.createElement("div");
div5.innerText = "5";
div5.className = "item";
div5.style.fontSize = "xx-large";
div5.style.textAlign = "center";
div5.style.width = "50%";
div5.style.background = "#F6BC0D";
div5.style.order = "-2";
div5.style.display ="flex";
div5.style.alignItems = "center";
div5.style.justifyContent= "space-around";
let dvFive = document.getElementsByClassName("holder");
for (let obj of dvFive) {
    obj.append(div5);
}



function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
};

function modificator (func) {
    return () => func('test', 'sample')
  };

const testFunc = modificator( sampleFunc );
testFunc();


// function modificator (func) {
//     return function () {
//       func('test', 'sample')
//     }
//   }

//   function modificator (func) {
//     return () => func('test', 'sample')
//   }
  
//   function modificator (func) {
//     return func.bind(null, 'test', 'sample')
  

const group = [{
        name: "Serj",
        lastName: "Morozov",
        age: 20 ,
    },
    {
        name: "jon",
        lastName: "Testovich",
        age: 25,
    }];

let getStudentsList = (arr) =>{
        let allList = '';
        arr.forEach(item => {
            let str = '';
            for (let key in item) {
                str = str +  key + ' - ' + item[key] + ',';
            }
            allList = allList + str;
        });
        return allList;
    }

console.log(getStudentsList(group));
