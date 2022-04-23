// Usando objeto express, importando modulo
const express = require('express');

// App de Express
const app = express();

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// Path inicial, respondera a la url localhost:3000
app.get('/', (request, response) => {
    response.send('Hello World!');
});

// Respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx');
});

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});