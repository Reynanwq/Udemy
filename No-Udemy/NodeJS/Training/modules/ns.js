const express = require('express');
const app = express();
const port = 5050;

app.get('/ns', function(req, res) {
    res.status(200).send("A escalação da NS na temporada de 2023")
});

app.listen(port, () => console.log(`The server Nongshin is online na port ${port}`));