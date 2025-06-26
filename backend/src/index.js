import pool from "./config/db.js";

const testQuery = async () => {
    try {
        const result = await pool.query("SELECT * from admin");
        console.log(result.rows);
    } catch (error) {
        console.error("Error running query ", err);
    }
}

testQuery();