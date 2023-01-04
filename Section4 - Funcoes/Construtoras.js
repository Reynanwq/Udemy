/*Faz mais coisas automaticamente
Função contrutora constroi objetos
Sempre iniciar o nome com letra maiuscula

Construtora -> Pessoa (new)
new: cria um novo objeto vazio e faz o "this" apontar para o objeto que está senddo iniciado
this: atributos ou métodos publicos
*/

function Pessoa(nome, sobrenome) {
    const ID = 292212211;

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Sasuke', 'Uchiha');
const p2 = new Pessoa('Naruto', 'Uzumaki');
console.log(p1.nome);
p2.metodo();
console.log(p2.sobrenome);