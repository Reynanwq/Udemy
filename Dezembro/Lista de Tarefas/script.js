//Sempre lembrar de adiconar o ponto quando for uma classe 
const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefa = document.querySelector('.tarefa');

function criali() {
    //creatElemente -> cria um objeto se o nome dado não for conhecido
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    //ENTER representa o valor 13
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criarTarera(inputTarefa.value);
    }
})

function limpaInput() {
    //reseta ao apertar ENTER
    inputTarefa.value = '';
    //.focus -> ao clicar, sinalizar que focou.
    inputTarefa.focus();
}

//keypress -> quando umma tecla for pressionada (EVENTO)
//keyup -> quando umma tecla for pressionada e solta (EVENTO)
function criarTarera(textoInput) {
    //exibir o que foi digitado no input text 
    const li = criali();
    li.innerHTML = textoInput;
    /*Relacionado com árvores:
    Tarefa é o pai
    li é o filho, ou seja, nó adicionado como filho*/
    tarefa.appendChild(li);
    limpaInput();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criarTarera(inputTarefa.value);
});