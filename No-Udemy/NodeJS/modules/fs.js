const fs = require('fs');
const path = require('path');

//CRIAR UMA PASTA
//mkdir vem do linux de criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log('Pasta Criada com Sucesso!');
})