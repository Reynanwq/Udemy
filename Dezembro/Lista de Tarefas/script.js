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

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = "Delete";
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
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
    criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criarTarera(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})