import pool from "../config/db.js";
import Club from "../model/Club.js";

class ClubDAO {
    async getAllClubs() {
        const query = "SELECT idkl, nazkl, drzkl, kbiokl, strkl FROM klub ORDER BY nazkl";
        const result = await pool.query(query);
        return result.rows.map(row => new Club(
            row.idkl,
            row.nazkl,
            row.drzkl,
            row.kbiokl,
            row.strkl 
        ));
    }
}

export default new ClubDAO();