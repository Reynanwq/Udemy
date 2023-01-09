exibirPrimos(15);

function exibirPrimos(value) {
    for (let number = 0; number < value; number++) {
        if (ehPrimo(number)) console.log(number);
    }
}

function ehPrimo(value) {
    for (let verifica = 2; verifica < value; verifica++) {
        if (value % verifica == 0) {
            return false;
        }
    }
    return true;
}