/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable(seconds) {
  //Pegar o tempo em segundos
  ////tempo maximo de segundos é 359999

  if (seconds > 359999) {
    console.log("Excedeu limite");
    return;
  }

  //Pega os segundo, se for maior que 3600, divide por 3600 e pega o quociente e o resto vai para minutos
  let hours = 0;
  let minutes = 0;
  let newSeconds = 0;
  let leftSeconds = seconds % 3600;
  let leftSeconds2 = seconds % 60;
  if (leftSeconds == 0) {
    hours = seconds / 3600;
  } else {
    hours = (seconds - leftSeconds) / 3600;
    if (leftSeconds % 60 == 0) {
      minutes = leftSeconds / 60;
    } else {
      minutes = (seconds - leftSeconds2) / 60 - hours * 60;
      newSeconds = leftSeconds2;
    }
  }

  let horaFinal = `${hours}:${minutes}:${newSeconds}`;
  console.log(horaFinal);
  // Divide por 60 , pega o quociente e o resto vira segundos
  //pegar horas, minutos e segundo e transformar em string e retornar

  return horaFinal;
}

humanReadable(0);
