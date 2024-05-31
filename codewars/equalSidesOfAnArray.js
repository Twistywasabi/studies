function findEvenIndex(arr) {
  //Code goes here!
  //Pega o array

  console.log(arr);

  //Coloca em um loop que vai interagir com cada elemento do array
  for (let i = 0; i < arr.length; i++) {
    ////Pega o indice atual e veja os elementos da direita e faz a soma
    const rightArray = arr.slice(i);
    console.log(rightArray);
    const sumRightArrayInitialValue = 0;
    const sumRightArray = rightArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sumRightArrayInitialValue
    );
    console.log(sumRightArray);
    ////Pega o indice atual e veja os elementos da esquerda e faz a soma
    ////compara a soma dos indices da direita com os indices da esqueda
  }
  //Se achou, imprimir resultado(no caso indice 3)
  //Se não, colocar indice -1
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
