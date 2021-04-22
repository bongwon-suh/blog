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
    let result = {
      "status": "fail",
      "data": {}
    };

    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();
      result.data = await conn.query(query);
      result.status = "success"
  
    } catch (err) {
      result.data = err;
      throw err;
    } finally {
      if (conn) {
        conn.end();
        return result;
      } 

    }
  }

  export default asyncFunction;