//usando query selector para pegar as classes
//colocar o ponto na frente do nome da classe
const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    alert('Cliquei no inciar');
});

pausar.addEventListener('click', function() {
    alert('Cliquei no pausar');
});

zerar.addEventListener('click', function() {
    alert('Cliquei no zerar');
});