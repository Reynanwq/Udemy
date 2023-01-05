const fs = require('fs');
const path = require('path');

//CRIAR UMA PASTA
//mkdir vem do linux de criar uma pasta
//join me dá acesso ao diretório e me permite realizar alterações nas pastas

//(error): também conhecido como callback, que é  o que irá ser feito  após a "primeira parte for realizada".



/* ------------  CRIAR PASTA -------------*/


/*
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    //caso o arquivo já exista ele irá dá erro, por isso só pode ser executado 1 vez
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log('Pasta Criada com Sucesso!');
})
*/


/*-------------- CRIAR ARQUIVO ------------ */


/*writeFile: para criar um arquivo: meu diretório atual, pasta do diretorio que eu quero inserir + arquivo que desejo criar + texto que é para está no arquivo*/
fs.writeFile(path.join(__dirname, '/teste', "test.txt"), "hello node!", (error) => {
    if (error) {
        return console.log('ERRO: ', error);
    }
    console.log('Arquivo criado com sucesso');
})