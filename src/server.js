const express = require('express');
require('dotenv').config();
const app = require('./app');


const PORT = process.env.PORT || 3000;

  // req = dados da requisição
  // res = objeto para enviar respostas

  app.get('/', (req, res) => {
    res.send('Valeu, Debs');
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});