const Appointment = require('../models/appointmentModel');

// Book an appointment
const bookAppointment = async (req, res) => {
  const { patientId, doctorId, appointmentDate } = req.body;

  try {
    const appointment = new Appointment({ patientId, doctorId, appointmentDate });
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.getAll();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cancel appointment
const cancelAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    await Appointment.update(appointmentId, { status: "canceled" });
    res.status(200).json({ message: "Appointment canceled" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { bookAppointment, getAppointments, cancelAppointment };
