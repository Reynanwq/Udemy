//Quando uma função tá dentro do objeto nós a chamamos de método
function criaPessoa(nome, sobreNome, altura, peso) {
    return {
        nome,
        sobreNome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const pesssoa = criaPessoa('Reynan', 'Paiva', 1.80, 60);
const pesssoa2 = criaPessoa('Renata', 'Santana', 1.65, 52);
//console.log(pessoa.nome);
console.log(pesssoa.fala('Falando sobre Java'));
console.log('O seu IMC é: ' + pesssoa.imc())
console.log(pesssoa2.fala('Falando sobre Java'));
console.log('O seu IMC é: ' + pesssoa2.imc())