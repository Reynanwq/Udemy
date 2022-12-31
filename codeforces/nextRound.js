/* k = número de participantes
   n = média
Descobrir quem está acima da média
*/
let k = 8,
    n = 5;

function nextRound(k, n) {
    let aux = 0;
    let aprovados = 0;
    for (let i = 0; i < k; i++) {
        aux += i;
        //console.log(aux);
        if (aux > n) {
            aprovados++;
            //console.log(aprovados);
        }
    }
    console.log(aprovados);
}

nextRound(k, n);