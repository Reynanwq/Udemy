function criaCalculadora() {
    /*Metodos abaixo e atributo acima*/
    //NO query selector sempre deve selecionar a clasee com o ".nome"
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //slice: recebe a string e tira 1 elemento dessa string.
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => { //keyup: tecla enter
                if (e.keyCode == 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            //UTILIZAR FUNÇÃO EVAL (MUITO PERIGOSA, POIS ELA PEGA QUALQUER COISA E JÁ TRANSFORMA PARA JAVASCRIPT)
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Invalida');
                return;
            }
        },
        cliqueBotoes() {
            document.addEventListener('click', e => { //precisou da arrow function para funcionar
                const el = e.target; //ou seja, serve para indicar qual documento nós estamos clicando, pois o "document" pega tudo na paágina.
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(value) {
            this.display.value += value;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();