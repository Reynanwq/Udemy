const array = [123, 343, 322, 11, 23, 4, 09, 6, 776, 850, 6, 4, 2];
/*
MAP: Aplicado em todos os valores do array ao mesmo tempo.
FILTER: Separa os valores com base na descrição
REDUCE: diminuir o número de valores no array de alguma forma
*/

const parNumber = array.filter(function(value) {
    return value % 2 == 0;
}).map(function(value) {
    return value * 2;
}).reduce(function(aux, value) { //2 parametros auxiliar e o array
    return aux + value;
});

console.log(parNumber);