/*Funcao que exibe a quantidade de asteriscos que
a linha possui  */

exibeAsteriscos(10);

function exibeAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) { //2 3 4
        let padrao = '';
        for (let i = 0; i < linha; i++) { //1 2 3
            padrao += '*';
        }
        console.log(padrao) //* ** ***
    }
}