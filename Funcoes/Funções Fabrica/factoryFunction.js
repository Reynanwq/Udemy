//Quando uma função tá dentro do objeto nós a chamamos de método
function criaPessoa(nome, sobreNome, altura, peso) {
    return {
        nome,
        sobreNome,
        /*------------ ATENÇÃO NO USO DOS METODOS GETTER E SETTER QUE FORAM USADOS NAS FUNÇÕES -----------*/
        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        },
        set nomeCompleto(valor) {
            //objetivo: Pegar um nome completo e separarr entre Nome e SobreNome
            valor = valor.split(' '); //a cada espaço
            this.nome = valor.shift(); //shift é um metodo que pega o primeiro valor e ainda remove ele do array
            this.sobreNome = valor.join(' '); //Pega tudo que está separado por virgula, tirando do array 
            //console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        get imc() { //get imc permite que eu acesse  imc  como se fosse um atributo (só vou utilizar isso a partir de agora)
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const pesssoa = criaPessoa('Reynan', 'Paiva', 1.80, 60);
const pesssoa2 = criaPessoa('Renata', 'Santana', 1.65, 52);



//console.log(pessoa.nome);
pesssoa.nomeCompleto = 'Reynan Da Silva Dias Paiva';
console.log(pesssoa.nomeCompleto);
console.log(pesssoa.fala('Falando sobre Java'));
console.log('O seu IMC é: ' + pesssoa.imc)
pesssoa2.nomeCompleto = 'Renata Santana';
console.log(pesssoa2.nomeCompleto);
console.log(pesssoa2.fala('Falando sobre Java'));
console.log('O seu IMC é: ' + pesssoa2.imc)