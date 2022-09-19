const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Welcome Page
app.get('/', function (req, res) {
  res.send('Welcome to Javascript blochain!');
});


//fetch entire blockchain
app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});


// create a new transaction
app.post('/transaction', function(req, res){
    console.log(req.body);
    res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`)
});


// mine a new block
app.get('/mine', function(req, res){

});


app.listen(3000, () => {
    console.log('Listening on port 3000.....');
    console.log('http://localhost:3000');
});