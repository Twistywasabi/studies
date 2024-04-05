/* 
○ getAttribute
§ Obter valor do atributo
○ setAttribute
§ Definir ou modificar o valor desse atributo 
 */

function changeImage() {
  const img = document.getElementById("myImage");
  const currentSrc = img.getAttribute("src");

  if (currentSrc === "imagem1.png") {
    img.setAttribute("src", "imagem2.png");
    img.setAttribute("alt", "Professor Daniel");
  } else {
    img.setAttribute("src", "imagem1.png");
    img.setAttribute("alt", "Silhueta misteriosa");
  }
}

function changeType() {
  const input = document.getElementsByTagName("input")[0]; //querySelector
  const currentType = input.getAttribute("type");
  switch (currentType) {
    case "text":
      input.setAttribute("type", "number");
      break;
    case "number":
      input.setAttribute("type", "radio");
      break;
    case "radio":
      input.setAttribute("type", "range");
      break;
    default:
      input.setAttribute("type", "text");
  }
}
