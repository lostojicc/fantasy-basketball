import pool from "../config/db.js";
import Club from "../model/Club.js";

class ClubDAO {
    async getAllClubs() {
        const query = `
            SELECT 
                k.idkl, k.nazkl, k.drzkl, k.kbiokl, k.strkl,
                SUM(CASE WHEN kos.g = '1' THEN 1 ELSE 0 END) AS guards,
                SUM(CASE WHEN kos.f = '1' THEN 1 ELSE 0 END) AS forwards,
                SUM(CASE WHEN kos.c = '1' THEN 1 ELSE 0 END) AS centers
            FROM klub k
            LEFT JOIN igra i ON k.idkl = i.klub_idkl
            LEFT JOIN kosarkas kos ON i.kosarkas_idkos = kos.idkos
            GROUP BY k.idkl, k.nazkl, k.drzkl, k.kbiokl, k.strkl
            ORDER BY k.idkl
        `;
        const result = await pool.query(query);
        return result.rows.map(row => {
            const club = new Club(
                row.idkl,
                row.nazkl,
                row.drzkl,
                row.kbiokl,
                row.strkl
            );
            
            // Add position statistics to the club object
            club.guards = parseInt(row.guards) || 0;
            club.forwards = parseInt(row.forwards) || 0;
            club.centers = parseInt(row.centers) || 0;
            
            return club;
        });
    }

    getClubById = async (clubId) => {
        const query = `
            SELECT *
            FROM klub k
            WHERE k.idkl = $1
        `;

        const result = await pool.query(query, [clubId]);
        if (result.rows.length === 0) return null;
        
        const row = result.rows[0];
        return new Club(
            row.idkl,
            row.nazkl,
            row.drzkl,
            row.kbiokl,
            row.strkl
        );
    }
}

export default new ClubDAO();