const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

class App {
  constructor() {
    this.server = express();
    this.database();
  }
  
  middlewares() {

  }
  
  routes() {

  }

    database() {
      this.mongoConnection = mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
  
    mongoose.connection.on('error', (err) => {
      console.log('Erro na conexão com o banco de dados: ' + err)
    })
  
    mongoose.connection.on('disconnected', () => {
      console.log('Aplicação desconectada do banco de dados!')
    })
  
    mongoose.connection.on('connected', () => {
      console.log('Aplicação conectada ao banco de dados!')
    })
  }

}

module.exports = new App().server;