function criaCalculadora() {
    /*Metodos abaixo e atributo acima*/
    //NO query selector sempre deve selecionar a clasee com o ".nome"
    display: document.querySelector('.display');

    return {
        inicia() {
            alert("Calculadora Inicializada");
        },
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target; //ou seja, serve para indicar qual documento nós estamos clicando, pois o "document" pega tudo na paágina.
            });
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();