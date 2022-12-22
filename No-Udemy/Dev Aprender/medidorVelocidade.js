/* velocidade maxima até 70
5km = 1ponto
math.floor() : arredanda para o numero mais baixo
pontos > 22 = carteira suspensa
*/

function velocidade(num) {
    const velocidadeMaxima = 70;
    const KmporPonto = 5;
    if (num <= velocidadeMaxima) {
        return 'tá safe';
    } else {
        const pontos = Math.floor((num - velocidadeMaxima) / KmporPonto);
        if (pontos >= 12) {
            return 'carteira suspensa';
        } else {
            return pontos;
        }
    }
}

const verificaVelocidade = velocidade(69);
console.log(verificaVelocidade);