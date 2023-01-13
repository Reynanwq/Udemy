//modo diferente de escrever uma função construtora

class pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

}

const p1 = new pessoa('Reynan', 'Paiva');
const p2 = new pessoa('Pedro', 'Paiva');
const p3 = new pessoa('Vinicius', 'Paiva');
console.log(p1);
console.log(p2);
console.log(p3);

p1.falar();
p2.falar();
p3.falar();