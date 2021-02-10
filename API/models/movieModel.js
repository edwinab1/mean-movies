const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    sinopsis: { type: String, required: true },
    country: { type: String },
    duration: { type: Number, required: true },
    director: { type: String, required: true },
    actors: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    created_at: { type: Date, default: new Date }
});

module.exports = mongoose.model('Movies', movieSchema);