function findEvenIndex(arr) {
  //Code goes here!
  //Pega o array
  //Coloca em um loop que vai interagir com cada elemento do array
  for (let i = 0; i < arr.length; i++) {
    ////Pega o indice atual e veja os elementos da direita e faz a soma
    const rightArray = arr.slice(i + 1);
    console.log(rightArray);
    const sumRightArrayInitialValue = 0;
    const sumRightArray = rightArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sumRightArrayInitialValue
    );
    console.log(sumRightArray);
    ////Pega o indice atual e veja os elementos da esquerda e faz a soma
    const leftArray = arr.slice(-arr.length, i);
    console.log(leftArray);
    const sumLeftArrayInitialValue = 0;
    const sumLeftArray = leftArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sumLeftArrayInitialValue
    );
    console.log(sumLeftArray);
    ////compara a soma dos indices da direita com os indices da esqueda
  }
  //Se achou, imprimir resultado(no caso indice 3)
  //Se não, colocar indice -1
}

findEvenIndex([1, 2, 3, 4, 5, 6, 7]);
