/*IMPORTAR O PERSON DENTRO DO INDEX
PARA IMPORTAR, UTILIZAMOS O "REQUIRE"

require("./nomeDoArquivo js")
como estamos exportando um ibjeto, a Person também se transforma em um objeto, para isso utilizamos as chaves {} e colocamos o nome dentro {nome do objeto}*/
//console.log(person.sayMyName());
//require('./modules/express');
//Usado para executar em um arquivo
//require('./modules/path');

/*ISSO É O SUFICIENTE PARA O USO DO DOTENV */


const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');
dotenv.config();
connectToDatabase();
require('./modules/express');