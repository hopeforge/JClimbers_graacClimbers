const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const dbConnection = require('../db/mysql');

require('dotenv-safe').config({silence:true});

var router = new express.Router();
var cors = require('cors')


router.get('/', (req, res) =>{
  global.db.query('SELECT * FROM donator',  function(error, results, fields){
    if(error)
      res.json(error);
    else
      res.json(results);
    console.log('Pesquisa da lista de donators foi executada com sucesso')
  })
});
//Pesquisar cliente pelo id
router.get('/:id?', (req, res) =>{
    const id = parseInt(req.params.id);
    global.db.query('SELECT * FROM donator WHERE id_donator=?',[id], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Pesquisa de donator id : '+id+' executado com sucesso !');
    });
});
//Deletar cliente pelo id
router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    global.db.query('DELETE FROM donator WHERE id_donator=?',[id], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Remoção de usuário ID: '+ id +' executado com sucesso !');
    });
});
//Atualizar cliente pelo id
router.patch('/:donator', (req, res) =>{
    const donator = req.params.donator.substring(0,150);
    const email = req.body.email.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    const rg = req.body.rg.substring(0,8);
    global.db.query('UPDATE Usuario SET name = ?, email = ? ,password = ?, WHERE id_donator = ?',[nome,email,password,usuario], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Atualização de usuário de ID: '+usuario+' executado com sucesso !');
    });
});
//Inserir um novo cliente
router.post('/',(req, res) =>{
    const donator = req.body.donator.substring(0,150);
    const email = req.body.email.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    const rg = req.body.rg.substring(0,8);
    global.db.query('INSERT INTO usuario(donator, email, cpf, rg) VALUES(?,?,?)',[donator, email, cpf, rg], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Cadastro de  novo usuario: executado com sucesso !');
    });
});

module.exports = router;
