const person = {
  name: "Augusto",
  lastName: "Burle",
  age: 79,
  netWorth: 1_000_000,
  car: {
    brand: "Volkswagen",
    model: "Gol",
    year: 2002,
  },
};

/* const personName = person.name;
const personLastName = person.lastName;
const age = person.age;
const brand = person.car.brand;
const model = person.car.model;
const year = person.car.year;
*/

/* const fullName = `${person.name} ${person.lastName}`; 


console.log(fullName);
 */
/* const { brand, model, year } = person.car;

anos de idade, motorista do carro ${brand} ${model} ${year} */

function printUserInfo({ name, lastName, age, netWorth }) {
  const presentationString = `esse é o ${name} ${lastName} de ${age}, dono de um patrimônio de ${netWorth}`;
  console.log(presentationString);
}

printUserInfo(person);

const grades = [8, 9, 4, 6];
/* 
grades[0], grades[1], grades[2], grades[3], */
const [firstBimesterGrade, secondBimesterGrade, ...banana] = grades;

console.log(`As notas do primeiro bimestre: ${firstBimesterGrade}`);
console.log(secondBimesterGrade);
console.log(banana);
