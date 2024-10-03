const express = require('express');
const { getPatients, updateProfile } = require('../controllers/patientController');
const router = express.Router();

router.get('/patients', getPatients);
router.put('/patients/:id', updateProfile);

module.exports = router;
