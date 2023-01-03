/*IMPORTAR O PERSON DENTRO DO INDEX
PARA IMPORTAR, UTILIZAMOS O "REQUIRE"

require("./nomeDoArquivo js")
como estamos exportando um ibjeto, a Person também se transforma em um objeto, para isso utilizamos as chaves {} e colocamos o nome dentro {nome do objeto}*/
const { Person } = require("./person");
const person = new Person('Reynan');
console.log(person.sayMyName());