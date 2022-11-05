const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/', controller.getFlight)
.get('/:id', controller.getFlight)
.post('/', controller.createFlight)
.put('/', controller.updateFlight)
.delete('/:id', controller.deleteFlight)

module.exports = router;

