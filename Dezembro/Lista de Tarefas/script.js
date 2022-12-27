//Sempre lembrar de adiconar o ponto quando for uma classe 
const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefa = document.querySelector('.tarefa');

function criarTarera(textoInput) {
    //exibir o que foi digitado no input text 
    console.log(textoInput);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criarTarera(inputTarefa.value);
});