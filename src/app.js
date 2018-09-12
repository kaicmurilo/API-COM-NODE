const express = require('express');//IMPORTANDO EXPRESS
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/index-route'); //CARREGA TODAS AS ROTAS.
const productRoute = require('./routes/products-route'); //CARREGA TODAS AS ROTAS.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //EXPORTANDO 