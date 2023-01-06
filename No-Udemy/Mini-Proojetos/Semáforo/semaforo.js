const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const luzes = (e) => {
    ligar[e.target.id]();
}

const ligar = {
    'red': () => img.src = './assets/vermelho.png',
    'green': () => img.src = './assets/verde.png',
    'yellow': () => img.src = './assets/amarelo.png'
}

buttons.addEventListener('click', luzes);