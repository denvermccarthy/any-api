const pool = require('../utils/pool');
module.exports = class Nut {
  id;
  nut;
  origin;
  constructor({ id, nut, origin }) {
    this.id = id;
    this.nut = nut;
    this.origin = origin;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from nuts;');
    return rows.map((row) => new Nut(row));
  }
  static async getNutById(id) {
    const { rows } = await pool.query('SELECT * from nuts WHERE id=$1;', [id]);
    const [single] = rows;

    return single ? new Nut(single) : null;
  }
};
