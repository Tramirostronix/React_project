const express = require('express');

const hostname = 'localhost';
const port = 3030;

const app = express();

/**
 * GET
 */
app.get('/users', (req, res) => {
    res.json({
        req: req.method,
        data: "This is  GET"
    })
});

/**
 * PUT
 */
app.put('/users', (req, res) => {
    res.json({
        req: req.method,
        data: "This is  PUT"
    })
});


app.listen(port, hostname, () => {
    console.log(`Mon serveur fonctionne sur https://${hostname}:${port}\n`);
});