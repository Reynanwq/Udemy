function relogio() {

    //usando query selector para pegar as classes
    //colocar o ponto na frente do nome da classe
    const timer = document.querySelector('.timer');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let time;
    //FUNCAO QUE PEGA MEUS SEGUNDO E PASSA PARA O FORMATO HORÁRIO

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        time = setInterval(function() {
            segundos++;
            timer.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);

    }


    iniciar.addEventListener('click', function(event) {
        //ao apertar o botão "iniciar", a classe 'pausado' não será ativada
        timer.classList.remove('pausado');
        clearInterval(time);
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(event) {
        //ao apertar o botão "pausar", a classe 'pausado' será ativada
        timer.classList.add('pausado');
        clearInterval(time);
    });

    zerar.addEventListener('click', function(event) {
        clearInterval(time);
        timer.innerHTML = '00:00:00';
        segundos = 0;
    });
}

relogio();