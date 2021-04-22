import mariadb from 'mariadb';
import * as fs from 'fs';
import path from 'path'

const SECRET = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'SECRET.json'), 'utf8'))

const pool = mariadb.createPool({
  "host": SECRET.DATABASE.HOST,
  "user": SECRET.DATABASE.USER,
  "password": SECRET.DATABASE.PASSWORD, 
  "database": SECRET.DATABASE.DATABASE
});

async function asyncFunction(query: string) {
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();
      const rows = await conn.query(query);
      console.log(rows)
      return rows;
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  export default asyncFunction;