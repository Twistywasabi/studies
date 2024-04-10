/* Some numbers have funny properties. For example:
	• 89 --> 8¹ + 9² = 89 * 1
	• 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
	• 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n. 
In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
(ap+bp+1+cp+2+dp+3+...)=n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) = n * k(ap+bp+1+cp+2+dp+3+...)=n∗k
If it is the case we will return k, if not return -1.
Note: n and p will always be strictly positive integers.
Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 */

function digPow(n, p) {
  //Pego o número n e divido os algarismos dele

  const numberN = n;
  const numberp = p;
  var numberStringSplit = numberN.toString().split("");
  console.log(numberStringSplit);

  //Pego o primeiro algarismo do numero n e elevo ele a p

  const firstN = numberStringSplit[0];
  console.log("Primeiro Número = ", firstNconverted);
  var i = 1;
  var firstNPowered = firstN;
  while (i < numberp) {
    firstNPowered = firstNPowered * firstN;
    i++;
  }

  console.log("firstPoweredN = ", firstNPowered);

  //Pego o segundo numero do algarismo e elevo ele a (p +1)

  const secondN = numberStringSplit[1];
  console.log("Segundo Número = ", secondN);
  var j = 1;
  var secondNPowered = secondN;
  while (j < numberp + 1) {
    secondNPowered = secondNPowered * secondN;
    j++;
  }

  console.log("secondPoweredN = ", secondNPowered);

  // Faço a soma desse primeiro algarismo elevado e do segundo algarismo elevado

  sumN = secondNPowered + firstNPowered;
  console.log("A soma dos firstPoweredN e secondPoweredN é", sumN);

  // Depois pego essa soma e divido por n

  const numberK = sumN / numberN;
  console.log("A letra K é: ", numberK);

  // o resultado é k
  // se não existir, definir k= -1
}

digPow(89, 1);
