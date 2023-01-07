//Forma de iterar entre arrays
const a1 = [1, 2, 3, 6, 9, 10, 11, 12, 6];
a1.forEach(function(value, i, array) {
    console.log(value, i, array)
});
let total = 0;
a1.forEach(value => {
    total += value;
});
console.log('A soma dos elementos do array resulta em: ' + total);