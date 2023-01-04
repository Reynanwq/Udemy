function criaCalculadora() {
    /*Metodos abaixo e atributo acima*/
    //NO query selector sempre deve selecionar a clasee com o ".nome"
    return {
        display: document.querySelector('.display'),
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //slice: recebe a string e tira 1 elemento dessa string.
        },
        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
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
            });
        },
        btnParaDisplay(value) {
            this.display.value += value;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();