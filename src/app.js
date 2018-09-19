const express = require('express');//IMPORTANDO EXPRESS
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(config.connectionString);

//Carrega os Models
const Products = require('./models/products');
const Curstomer = require('./models/customer');
const Order = require('./models/order');

//Carrega as rotas
const indexRoute = require('./routes/index-route'); //CARREGA TODAS AS ROTAS.
const productRoute = require('./routes/products-route'); //CARREGA TODAS AS ROTAS.
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/orders', orderRoute);

module.exports = app; //EXPORTANDO 