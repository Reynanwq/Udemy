const lampadaImagem = document.getElementById('lampada-img');
const LigarDesligar = document.getElementById('ligarDesligarBotao');

function lampadaQuebrada() {
    return lampadaImagem.src.indexOf('quebrada') > -1;
}

function lampadaLigada() {
    //SE A LAMPADA NÃO ESTIVER QUEBRADA
    if (!lampadaQuebrada()) {
        lampadaImagem.src = './assets/ligada.jpg';
    }
}

function lampadaDesligada() {
    //SE A LAMPADA NÃO ESTIVER QUEBRADA
    if (!lampadaQuebrada()) {
        lampadaImagem.src = './assets/desligada.jpg';
    }
}

function quebrou() {
    lampadaImagem.src = './assets/quebrada.jpg';
}

function lampadaLigadaDesligada() {
    if (LigarDesligar.textContent == 'Ligar') {
        lampadaLigada();
        LigarDesligar.textContent = 'Desligar';
    } else {
        lampadaDesligada();
        LigarDesligar.textContent = 'Ligar';
    }
}

LigarDesligar.addEventListener('click', lampadaLigadaDesligada);

//se passar o mouse por cima
lampadaImagem.addEventListener('mouseover', lampadaLigada);
//ao tirar o mouse de cima
lampadaImagem.addEventListener('mouseleave', lampadaDesligada);
//Evento DBCLICK: ao clicar 2x em algo
lampadaImagem.addEventListener('dblclick', quebrou);