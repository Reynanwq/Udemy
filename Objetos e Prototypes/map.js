const pessoas = [
    { id: 3, nome: 'Reynan' },
    { id: 2, nome: 'Pedro' },
    { id: 1, nome: 'Tiago' },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa })
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));