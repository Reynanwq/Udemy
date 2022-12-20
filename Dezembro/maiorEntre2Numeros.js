//funcao retorna maior entre dois números
function max(x, y) {
    if (x > y)
        return x;
    else
        return y;
}
console.log(max(18, 4));

//outra forma
function maxOF(x, y) {
    return x > y ? x : y;
}
console.log(maxOF(18, 4));

//Forma 1 linha
const max2 = (x, y) => x > y ? x : y;
console.log(max2(18, 4));