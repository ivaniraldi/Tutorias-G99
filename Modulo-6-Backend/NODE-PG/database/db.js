const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432, 
    database: process.env.DB_NAME,
    allowExitOnIdle: true
})

const getHealth = async () =>{
   try {
    const result = await pool.query("SELECT NOW()")
   console.log("🟢 Base de datos conectada y funcionando a las " + result.rows[0].now)
   } catch (error) {
    console.error("❌ Error conectando a la base de datos: "+ error.message)
   }
}

getHealth()

module.exports = pool