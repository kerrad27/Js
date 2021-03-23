const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
  };
  
  function getCity(){
  for (let [key, value] of Object.entries(citiesAndCountries)) {
  console.log(`${key} - это ${value}`);
  }};
  result = getCity();


  const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг','Пятница','Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday', 'Sunday'],
    };
   

  const getDay = (lang, datNum) => {
    return namesOfDays[lang][datNum - 1]
  };

  console.log(getDay('ru', 3));


  // Task3
const personN = {
    name: 'Vlad'
};

const personS = {
    age: 1,
};

function setProto (currentObj, protoObj) {
  protoObj.__proto__ = currentObj;
}
setProto(personS, personN);
console.log(personN);


const person = {
  name: null,
  age: null,
  car:null,
  ageValidation() {
      if (this.age) {
          return this.age;
      } else {
          return 'Validation Error';
      }
  },
  getAge() {
      return this.ageValidation();
  },
  setAge(newAge) {
      this.age = newAge
  },
  getName() {
      return this.name;
  },
  setName(newName) {
      this.name = newName;
  },
};
const person1 = {};
person1.__proto__ = person;

person1.setName('tom')
console.log(person1.getName());

person1.setAge(24); 
console.log(person1.getAge()); 


