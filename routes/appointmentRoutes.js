const express = require('express');
const { bookAppointment, getAppointments, cancelAppointment } = require('../controllers/appointmentController');
const router = express.Router();

router.post('/appointments', bookAppointment);
router.get('/appointments', getAppointments);
router.put('/appointments/:id/cancel', cancelAppointment);

module.exports = router;
