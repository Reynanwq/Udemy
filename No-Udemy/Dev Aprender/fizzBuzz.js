//div / 3 -> fiz
//div / 5 -> buzz
//div / 3 e div / 5 -> fizzBuzz
//nao é divisivel por nenhum -> entrada
//não é um número -> 'Não é um número'

function Entrada(num) {
    if (typeof num !== 'number') {
        console.log('Não é um número');
    }
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    if ((num % 3 !== 0) && (num % 5 !== 0)) {
        return num;
    }

    return num;
}

const FizzBuzz = Entrada(35);
console.log(FizzBuzz);