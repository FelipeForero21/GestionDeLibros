const libros = require('../models/userModel');

const userController = {
    creacionDeLibros: async (req, res) => {
        try {
            const nuevoUsuario = new libros({
                nombre: req.body.nombre,
                genero: req.body.genero,
                referencia: req.body.referencia

            });
            await nuevoUsuario.save();
            res.status(201).json({
                message: 'Libro agregado correctamente'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al crear el libro'
            });
        }
    },

    obtenerTodosLosLibros: async (req, res) => {
        try {
            const todasLasNotas = await libros.find();
            res.json(todasLasNotas);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error en el servidor' });
        }
    },

    consultarLibros: async (req, res) => {
        try {
          const { consultar1 } = req.query;
          const referencias = await libros.find({ referencia: new RegExp(`\\b${consultar1}\\b`, 'i') });
          res.json(referencias);
        } catch (error) {
          console.log(error);
          res.status(400).json({ message: 'Error en el servidor' });
        }
      },
    actualizarLibro: async (req, res) => {
        try {
            const { nombre } = req.params;
            const libroactualizado = await libros.findOneAndUpdate({ nombre: nombre }, { new: true });
            res.json(libroactualizado);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error en el servidor' });
        }
    },	
    eliminarLibro: async (req, res) => {
        try {
            const { referencia } = req.params;
            const libroeliminado = await libros.findOneAndDelete({ referencia: referencia });
            res.json(libroeliminado);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Error en el servidor' });
        }
    },
};

module.exports = userController;
