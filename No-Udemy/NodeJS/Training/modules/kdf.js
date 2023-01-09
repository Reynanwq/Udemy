const express = require('express');
const app = express();
const port = 5050;

app.get('/kdf', function(req, res) {
    res.status(230).send("A escalação do time da KDF na temporada 2023")
});

app.listen(port, () => console.log(`The Server Kwangdon Frecss is running in the port ${port}`));