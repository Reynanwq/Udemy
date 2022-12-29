function multiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
console.log(duplica(22));
console.log(triplica(4));