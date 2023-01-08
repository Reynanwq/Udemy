/*Exercicio nota escolar
Obter a média a partir de um array

0 - 59: E
60 - 69: D
70 - 79: C
80 - 89: B
90 - 100: A
*/

const array = [70, 80, 90];

notaDoAluno(array);

function notaDoAluno(array) {

    const mediaDoAluno = array.reduce(function(aux, value) {
        return aux + value / (array.length);
    });

    if (mediaDoAluno < 59) return 'E';
    if (mediaDoAluno < 60) return 'D';
    if (mediaDoAluno < 70) return 'C';
    if (mediaDoAluno < 80) return 'B';
    if (mediaDoAluno < 90) return 'A';
    return 'R';
}