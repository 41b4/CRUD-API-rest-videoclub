var express = require('express');
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');
var prestamosRouter = require('./routes/prestamos');
const clientesRouter = require('./routes/clientes')
var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/catalog', catalogRouter);
app.use('/api/prestamos', prestamosRouter);
app.use('/api/clientes', clientesRouter);
module.exports = app;
