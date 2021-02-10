const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router
  .post('/create', movieController.create)
  .get('/read', movieController.read)
  .put('/updare/:id', movieController.read)
  .delete('/delete/:id', movieController.read);

module.exports = router;
