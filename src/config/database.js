const mongoose = require('mongoose');
let User;

const connectDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('libros', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://elipeforero21:elipeforero21@cluster0.laag0sa.mongodb.net/')
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.log(err));
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;
