function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefaut();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.vallue} ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();