function rand(min, max) {
    min *= 100;
    max *= 100;
    return Math.floor(Math.random() * (max - min) + min);
}

/*function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}*/

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //utilizamos esses nomes por convenção
        //resolve: executou com sucesso, etnão resolve isso pra mim
        //reject: deu erro, rejeita isso pra mim
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('COnexao com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('exibe dados na tela');
    })
    .catch(e => { //CATCH É SEMPRE UM ERRO
        console.log('ERRO', e);
    });


//TEM QUE EXECUTAR NA ORDEM