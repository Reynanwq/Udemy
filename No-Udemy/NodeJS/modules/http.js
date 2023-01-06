const http = require('http');

//PRECISAMOS CRIAR UMA PORTA 
const port = 8080;

//a pessoa manda o requeste para o servidor e a pessoa manda o response para ela
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { "Content-Type": "text/html" }); //dizer o tipo de conteudo que estamos ennviando
        //200 é "status code" e significa que a requisição foi ok
        res.end("<h1>Ei Reynan, você criou o seu primeiro server, parabéns pelo seu trabalho, continue evoluindo</h1>");
    }

    //criar back-end para front-end consumir
    if (req.url === '/users') {
        const users = [{
                name: 'Reynan Paiva',
                email: 'Reynanwq@gmail.com',
            },
            {
                name: 'Kuroko',
                email: 'kuroko@getMaxListeners.com',
            },
        ];
        //para mandar, temos que dizer o tipo dessa resposta
        res.writeHead(200, { "Content-Type": "application/json" });
        //a resposta deve ser enviada em forma de string
        res.end(JSON.stringify(users));
    }
});

//PARA COLOCAR O SERVER ONLINE
server.listen(port, () => console.log(`O CÓódigo está Rodando na porta ${port}`));