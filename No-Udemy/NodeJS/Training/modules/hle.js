const express = require('express');
const app = express();
const port = 5050;

app.get('/hle', function(req, res) {
    res.status(210).send("A escalação da HLE na temporada 2023")
});

app.listen(port, () => console.log(`My server Hanwa Life Sports is online in the port ${port}`));