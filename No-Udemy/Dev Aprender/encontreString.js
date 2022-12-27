//PODE SER MUITO UTIL NO FUTURO

const movie = {
    titulo: 'Vingadores',
    ano: 2015,
    diretor: 'Frederick',
    Personagem: 'Capitão América'
}

function exibirString(obj) {
    //para iterar sobre um objetor, utilizamos o for com "prop"
    for (prop in obj) { //iterar sobre propiedade do objeto
        if (typeof obj[prop] === 'string') {
            //se o tipo for igual a uma string, exibir
            console.log(prop, obj[prop]);
        }
    }
}

exibirString(movie);