//setTimeout -> diz o tempo em que algo será executado
/*Callback: dá prioridade caso alguma função deva ser exexutada exatamente após outra ser executada, ou seja, coisassa que chamamos exatamente appós outra coisa terminar de ocorrer.*/
function rand(min = 100, max = 900) {
    const res = Math.random() * (max - min) + min;
    return Math.floor(res);
}

function largada() {
    console.log("Os Três primeiros colocados foram: ");
}

function f1() {
    setTimeout(function() {
        console.log('Ferrari');
    }, rand());
}

function f2() {
    setTimeout(function() {
        console.log('RedBull');
    }, rand())
}

function f3() {
    setTimeout(function() {
        console.log("Mercedes");
    }, rand());
}
largada();
f1();
f2();
f3();