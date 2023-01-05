const http = require('http');

//PRECISAMOS CRIAR UMA PORTA 
const port = 8080;

//a pessoa manda o requeste para o servidor e a pessoa manda o response para ela
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { "Content-Type": "text/html" }); //dizer o tipo de conteudo que estamos ennviando
        //200 é "status code" e significa que a requisição foi ok
        res.end("<h1>home page</h1>");
    }
});

//PARA COLOCAR O SERVER ONLINE
server.listen(port, () => console.log(`Rodando na porta ${port}`));