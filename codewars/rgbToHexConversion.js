function rgb(r, g, b) {
  //Qualquer valor que fique fora do escopo 255 ou 0, tem que ser arredondado para 0 ou 255
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  //Pega o valor decimal de r e converte para hexadecimal
  console.log(Math.round(r));
  console.log(Math.round(r).toString(16).padStart(2, "0").toUpperCase());
  console.log(Math.round(g));
  console.log(Math.round(g).toString(16).padStart(2, "0").toUpperCase());
  console.log(Math.round(b));
  console.log(Math.round(b).toString(16).padStart(2, "0").toUpperCase());
  //Juntar todo mundo em uma string

  return console.log(
    `${Math.round(r).toString(16).padStart(2, "0").toUpperCase()}${Math.round(g)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase()}${Math.round(b)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase()}`
  );
}

rgb(10, 0, 0);
