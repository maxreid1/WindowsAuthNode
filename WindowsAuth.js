const sql = require('mssql/msnodesqlv8')

const pool = new sql.ConnectionPool({
  connectionString: 'Driver={SQL Server};Server={database-4.ceb1fla2oycy.us-east-1.rds.amazonaws.com};Database={master};Trusted_Connection={yes}'
})

;(async () => {
  try {
    let connection = await pool.connect()
    let result = await connection.request().query("SELECT 1;")
    console.log("Successfully connected")
    console.log(result)
  } catch(err) {
    console.log("failed to connect")
    console.log(err)
  } finally {
    pool.close()
  }
})()