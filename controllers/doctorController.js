const Doctor = require('../models/doctorModel');

// Add a new doctor
const addDoctor = async (req, res) => {
  const { userId, specialization, availability } = req.body;

  try {
    const doctor = new Doctor({ userId, specialization, availability });
    await doctor.save();
    res.status(201).json({ message: "Doctor added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.getAll();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update doctor availability
const updateDoctor = async (req, res) => {
  const { doctorId } = req.params;
  const { specialization, availability } = req.body;

  try {
    await Doctor.update(doctorId, { specialization, availability });
    res.status(200).json({ message: "Doctor updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addDoctor, getDoctors, updateDoctor };
