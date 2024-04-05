function sum(...parcels) {
  return parcels.reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sum(2, 3));
console.log(sum(2, 3, 4));
console.log(sum(2, 3, 4, 5, 6, 7, 8, 9));

function gradesSum(name, lastName, ...grades) {
  return `O aluno ${name} ${lastName} acumulou ${grades.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  )} pontos em todas as suas avaliações`;
}

console.log(gradesSum("Daniel", "Porto", 5, 8, 6, 10));
