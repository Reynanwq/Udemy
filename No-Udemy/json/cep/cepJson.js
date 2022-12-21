//XMLHttpRequest: fazer requisição de um site sem precisar acessa o navegador

const ajax = new XMLHttpRequest();

//METODO GET é pegar
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
//enviar solicitação
ajax.send();
/*Quando carregar as informações que estão vindo do site
colocar as respostas do site na minha div 'area'.
*/
ajax.onload = function() {
    document.getElementById('area').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.localidade);
}