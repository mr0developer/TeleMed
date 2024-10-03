const express = require('express');
const { addDoctor, getDoctors, updateDoctor } = require('../controllers/doctorController');
const router = express.Router();

router.post('/doctors', addDoctor);
router.get('/doctors', getDoctors);
router.put('/doctors/:id', updateDoctor);

module.exports = router;
