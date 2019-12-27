const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const dbConnection = require('../db/mysql');

require('dotenv-safe').config({silence:true});

var router = new express.Router();


//Listar todos os clientes
router.get('/', (req, res) =>{
  global.db.query('SELECT * FROM users',  function(error, results, fields){
    if(error)
      res.json(error);
    else
      res.json(results);
    console.log('Pesquisa da lista de usuários foi executada com sucesso')
  })
});
//Pesquisar cliente pelo id
router.get('/:user?', (req, res) =>{
    const user = req.params.user.substring(0,150);
    global.db.query('SELECT * FROM users WHERE username=?',[user], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Pesquisa de usuário : '+usuario+' executado com sucesso !');
    });
});
//Deletar cliente pelo id
router.delete('/:user', (req, res) =>{
    const id = req.params.usuario.substring(0,150);
    global.db.query('DELETE FROM users WHERE username=?',[usuario], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Remoção de usuário ID: '+usuario+' executado com sucesso !');
    });
});
//Atualizar cliente pelo id
router.patch('/:user', (req, res) =>{
    const usuario = req.params.usuario.substring(0,150);
    const nome = req.body.nome.substring(0,150);
    const email = req.body.email.substring(0,11);
    global.db.query('UPDATE Usuario SET name = ?, email = ? ,password = ?, WHERE user = ?',[nome,email,password,usuario], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Atualização de usuário de ID: '+usuario+' executado com sucesso !');
    });
});
//Inserir um novo cliente
router.post('/', (req, res) =>{
    const nome = req.body.nome.substring(0,150);
    console.log(nome)
    const password = bcrypt.hashSync(req.body.password.substring(0,150), 8);
    console.log(password)
    const email = req.body.email.substring(0,11);
    console.log(email)
    const usuario = req.body.usuario.substring(0,150);
    console.log(usuario)
    global.db.query('INSERT INTO users(name, username, password, email) VALUES(?,?,?,?)',[nome, usuario, password, email], function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        console.log('Cadastro de novo usuario: executado com sucesso !');
    });
});

module.exports = router;
