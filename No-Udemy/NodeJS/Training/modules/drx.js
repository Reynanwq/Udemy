const express = require('express');
const app = express();
const port = 5050;

app.get('/drx', function(req, res) {
    res.status(200).send("Time da DRX na temporada - 2023")
});

app.listen(port, () => console.log(`My server Dragon X is online in the port ${port}`));