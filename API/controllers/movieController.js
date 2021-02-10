const movieModel = require('../models/movieModel');

module.exports = {

    create: (req, res) => {
        const body = req.body;

        console.table(body)

        const movie = new movieModel(body);
        movie.save((err, result) => {
            if (err) return res.status(500).json({ ok: false, data: err })
            res.status(200).json({ ok: true, data: result })
        })
    },

    read: (req, res) => {
        movieModel.find({}, (err, result) => {
            if (err) return res.status(500).json({ ok: false, data: err })
            res.status(200).json({ ok: true, data: result })
        })
    },

    update: (req, res) => {
        const id = req.params.id;
        const body = req.body;

        movieModel.findByIdAndUpdate(id, body, { new: true }, (err, result) => {
            if (err) return res.status(500).json({ ok: false, data: err })
            res.status(200).json({ ok: true, data: result })
        })
    },
    delete: (req, res) => {
        const id = req.params.id;
        movieModel.findByIdAndDelete(id, (err, result) => {
            if (err) return res.status(500).json({ ok: false, data: err })
            res.status(200).json({ ok: true, data: result })
        })
    }

}