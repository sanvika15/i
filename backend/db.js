const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017')
        .then(() => {
            console.log('Connection successful');
        })
        .catch((err) => {
            console.log('Connection failed:', err);
        });
};

module.exports = connectToMongo;
