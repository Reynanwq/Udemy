function exibirPrimos(value) {
    for (let number = 0; number < value; number++) { //4
        if (ehPrimo(number)) console.log(number);
    }
}

function ehPrimo(value) {
    for (let verifica = 2; verifica < value; verifica++) { // 5 < 4 ?
        if (value % verifica == 0) {
            return false;
        }
    }
    return true;
}
exibirPrimos(4);