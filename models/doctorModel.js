const db = require('../config/db');

class Doctor {
  constructor({ userId, specialization, availability }) {
    this.userId = userId;
    this.specialization = specialization;
    this.availability = availability;
  }

  async save() {
    const query = 'INSERT INTO doctors (userId, specialization, availability) VALUES (?, ?, ?)';
    const values = [this.userId, this.specialization, JSON.stringify(this.availability)];
    await db.execute(query, values);
  }

  static async getAll() {
    const [result] = await db.execute('SELECT * FROM doctors');
    return result;
  }

  static async update(doctorId, data) {
    const query = 'UPDATE doctors SET specialization = ?, availability = ? WHERE id = ?';
    const values = [data.specialization, JSON.stringify(data.availability), doctorId];
    await db.execute(query, values);
  }
}

module.exports = Doctor;
