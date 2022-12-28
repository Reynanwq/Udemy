function funcao() {
    //arguments -> exibe todos os parametros que foram passados.
    //console.log(arguments);
    console.log(arguments[0]); //exibir  pelo indice
}

function soma() {
    let total = 0;
    for (let parametros of arguments) {
        total += parametros;
    }
    console.log('a soma de todos os parametros é: ' + total);
}

function calculadora(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

funcao('Hello Friend', 18);
soma(1, 2, 45, 6, 6, 7, 77, 5343, 4534, 5, 767, 0, 0, 56, 75, 75);
calculadora('*', 7, 3, 5);