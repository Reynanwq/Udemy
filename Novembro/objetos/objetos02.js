function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('Reynan', 'Paiva', 19);
const pessoa2 = criarPessoa('Rubens', 'Chagas', 49);
const pessoa3 = criarPessoa('Sonia', 'Dias', 49);

console.log(pessoa2.sobrenome, pessoa3.nome);