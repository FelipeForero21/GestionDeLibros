const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema({
    nombre: String,
    genero: String,
    referencia: String,
});

const libros = mongoose.model('libros', librosSchema);

module.exports = libros;
