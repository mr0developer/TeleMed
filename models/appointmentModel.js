const db = require('../config/db');

class Appointment {
  constructor({ patientId, doctorId, appointmentDate }) {
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.appointmentDate = appointmentDate;
  }

  async save() {
    const query = 'INSERT INTO appointments (patientId, doctorId, appointmentDate) VALUES (?, ?, ?)';
    const values = [this.patientId, this.doctorId, this.appointmentDate];
    await db.execute(query, values);
  }

  static async getAll() {
    const [result] = await db.execute('SELECT * FROM appointments');
    return result;
  }

  static async update(appointmentId, data) {
    const query = 'UPDATE appointments SET status = ? WHERE id = ?';
    const values = [data.status, appointmentId];
    await db.execute(query, values);
  }
}

module.exports = Appointment;
