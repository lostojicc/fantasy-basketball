import pool from "../config/db.js";
import Round from "../model/Round.js";

class RoundDAO {
    async getAllRounds() {
        const query = `
            SELECT idr, datpoc, datz
            FROM runda
            ORDER BY idr
        `;
        const result = await pool.query(query);
        return result.rows.map(row => new Round(
            row.idr,
            row.datpoc,
            row.datz
        ));
    }

    async getRoundById(roundId) {
        const query = `
            SELECT idr, datpoc, datz
            FROM runda
            WHERE idr = $1
        `;
        const result = await pool.query(query, [roundId]);
        if (result.rows.length === 0) return null;
        
        const row = result.rows[0];
        return new Round(
            row.idr,
            row.datpoc,
            row.datz
        );
    }
}

export default new RoundDAO(); 