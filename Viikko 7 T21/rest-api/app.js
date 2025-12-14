var express = require('express');
var app = express();

app.use(express.json());


const opiskelijaRouter = require('./routes/opiskelija');
app.use('/opiskelija', opiskelijaRouter);

const opintojaksoRouter = require('./routes/opintojakso');
app.use('/opintojakso', opintojaksoRouter);

const arviointiRouter = require('./routes/arviointi');
app.use('/arviointi', arviointiRouter);

module.exports = app;
