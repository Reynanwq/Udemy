/*
async e await

uma depende da outra, só consigo usar o async na função se também for utilizar o await.


*/
function rand(min, max) {
    min *= 100;
    max *= 100;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //utilizamos esses nomes por convenção
        //resolve: executou com sucesso, etnão resolve isso pra mim
        //reject: deu erro, rejeita isso pra mim
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

async function executa() {

    try {
        const fase1 = await esperaAi('Fase 1', rand()); //tenho que jogar em uma variavel
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Termminamos a Frase');
    } catch (error) {
        console.log(erro);
    }
}

executa();

/*------ STATUS  ----------
pending -> pendente
fallfilled -> resolvida
rejected -> rejeitada
*/