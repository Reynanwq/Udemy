const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.status(200).send("Rotando via express")
});

app.listen(port, () => console.log("Meu servidor está funcionando!!!"))