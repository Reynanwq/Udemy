function somar(limite) {
    let multiplos3 = 0;
    let multiplos5 = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            multiplos3 += i;
        }
        if (i % 5 === 0) {
            multiplos5 += i;
        }
    }
    let resultado = (multiplos3 + multiplos5);
    console.log("A soma dos multiplos de 3 é " + multiplos3);
    console.log("A soma dos multiplos de 5 é " + multiplos5);
    console.log("A Soma dos números que são multiplos de 3 e 5 é: " + resultado);
}
somar(10);