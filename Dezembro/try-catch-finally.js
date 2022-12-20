function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância de date');
    }

    if (!data) {
        //caso nao dê nenhuma hora, retorne a hora atual
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        //hora será exibida apenas com 2 digitos.
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

//tente executar
try {
    const hora = retornaHora();
    console.log(hora);

} catch (e) {
    //caso dê ERRO
    //trata erro
    //console.log(e);
} finally {
    //sempre execute
    console.log('Continue Programando,você está indo bem.');
}