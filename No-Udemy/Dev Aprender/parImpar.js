let number;

function parImpar(number) {
    let minhaEntrada;
    for (minhaEntrada = 0; minhaEntrada <= number; minhaEntrada++) {
        if (minhaEntrada % 2 === 0) {
            console.log(minhaEntrada + ' Par');
        } else {
            console.log(minhaEntrada + ' Impar');
        }
    }
}

parImpar(50);