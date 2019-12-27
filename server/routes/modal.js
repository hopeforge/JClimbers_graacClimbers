const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const dbConnection = require('../db/mysql');
var cors = require('cors');

require('dotenv-safe').config({silence:true});


var router = new express.Router();

router.post('/',(req, res) =>{
  console.log('Começa a prova')
  const company = req.body.company.substring(0,150);
  console.log('passei1')
  const donator = req.body.donator.substring(0,150);
  console.log('passei12')
  const email = req.body.email.substring(0,150);
  console.log('passei13')
  const cpf = req.body.cpf.substring(0,150);
  console.log('passei14')
  const rg = req.body.rg.substring(0,150);
  var iddonation = 0
  var iddonator =0
  console.log('passei15')
  global.db.query('CALL NEW_DONATION(?, ?, ?, ?, ?, ?, ?)',[company, donator, email, cpf, rg, iddonation, iddonator], function(error, results, fields){
    if(error)
      res.json(error);
    else
      results.json(results);
    console.log('Função executada com sucesso')
      })
});

router.get('/t',(req, res) =>{res.send('GET request to the homepage')})

module.exports = router;
