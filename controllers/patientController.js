const User = require('../models/userModel');

// Get all patients (admin only)
const getPatients = async (req, res) => {
  try {
    const patients = await User.findAllPatients();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update patient profile
const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  try {
    await User.update(userId, { name, email });
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPatients, updateProfile };
