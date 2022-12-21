function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//imprimir a hora a cada 1 segundo
const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000); //1000 = 1 segundo]

setTimeout(function() {
    //parar o tempo
    clearInterval(timer);
}, 5000);

setTimeout(function() {
    console.log("O tempo acabou!");
}, 6000);