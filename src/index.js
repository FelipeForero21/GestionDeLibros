const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/database');
const routes = require('./routes/index.js');
const app = express();
const port = 3000;

connectDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
