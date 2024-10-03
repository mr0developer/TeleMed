const db = require('../config/db');

class User {
  constructor({ name, email, password, role }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  async save() {
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [this.name, this.email, this.password, this.role];
    await db.execute(query, values);
  }

  static async findByEmail(email) {
    const [result] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
  }

  static async findAllPatients() {
    const [result] = await db.execute("SELECT * FROM users WHERE role='patient'");
    return result;
  }
}

module.exports = User;
