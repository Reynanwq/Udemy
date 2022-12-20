const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number === 2) {
        console.log('pulei o number two');
        continue;
    }
    console.log(number);
    if (number === 6) {
        console.log('elemento 6 encontrado, codigo finalizando....');
        break;
    }
}
let i = 0;
while (i < numbers.length) {
    let number = numbers[i];
    if (number === 2) {
        console.log('pulei o number two');
        continue;
    }
    console.log(number);
    if (number === 6) {
        console.log('elemento 6 encontrado, codigo finalizando....');
        break;
    }
}