const person = {
  name: "Daniel",
  surname: "Porto",
  age: 29,
  postalCode: "12345-230",
  /*   mother: {
    name: "Maria",
  }, */
};

console.log(person?.mother?.name);

//truthy
//falsy (0, null, undefined e "")

//[] e {} não são falsy

/* if (person && person.mother && person.mother.name) {
  console.log(person.mother.name);
} */
