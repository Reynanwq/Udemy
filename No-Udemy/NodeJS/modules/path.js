const path = require('path');

/*Basename: ver apenas o nome do arquivo atual
No path, nós temos acesso a algumas variaveis globais, "__filename" pega o nome do arquivo*/
console.log(path.basename(__filename));

//Nome do diretorio atual (local em que está)
console.log(path.dirname(__filename));

//Pegar a extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto path
console.log(path.parse(__filename));