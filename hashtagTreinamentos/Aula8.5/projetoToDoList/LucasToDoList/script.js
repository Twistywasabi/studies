const tarefa = document.getElementById("taskInput");
const listaTarefas = document.getElementById("taskList");

function addTask() {
  if (tarefa.value === "") {
    alert("Erro: campo vazio, adicione alguma tarefa, por favor :)");
  } else {
    const novaLi = document.createElement("li");
    novaLi.textContent = tarefa.value;
    //Adicionar o botão de remover
    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = function () {
      listaTarefas.removeChild(novaLi);
    };

    novaLi.appendChild(botaoRemover);
    listaTarefas.appendChild(novaLi);
    tarefa.value = "";
  }
}
