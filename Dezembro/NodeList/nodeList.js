//aplicar no paragrafo a cor do body

//deiv paragrafo
const paragrafos = document.querySelector('.paragrafos');
//pegar 1 paragrafo
const ps = paragrafos.querySelectorAll('p');

//qual a cor do meu body?
const bodyStyles = getComputedStyle(document.body);

//var para pegar uma variavel de 'bodyStyles'
const backgroundColorBody = bodyStyles.backgroundColor;
//exibir a cor do meu body no console
console.log('Esta é a cor do meu body:', backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}