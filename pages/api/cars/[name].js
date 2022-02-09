// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require('../db/connection')

export default async function handler(req, res) {
  const {name} = req.query

  try {
    const cars = await pool.query(
      'SELECT * FROM cars WHERE user_id = (SELECT id from users where name=$1)',
      [name]
    );
    console.log(cars.rows);
    res.json(cars.rows);
  } catch (e) {
    console.log(e.message);
  }
}
