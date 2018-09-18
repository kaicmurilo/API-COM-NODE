const express = require('express');//IMPORTANDO EXPRESS
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb://kaic:kaic123456@ds028559.mlab.com:28559/kaicolas');

//Carrega os Models
const Products = require('./models/products');
const Curstomer = require('./models/customer');
const Order = require('./models/order');

//Carrega as rotas
const indexRoute = require('./routes/index-route'); //CARREGA TODAS AS ROTAS.
const productRoute = require('./routes/products-route'); //CARREGA TODAS AS ROTAS.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; //EXPORTANDO 