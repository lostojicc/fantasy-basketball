import pool from "../config/db.js";
import Team from "../model/Team.js";

class TeamDAO {
    async getTeamById(teamId) {
        const query = `
            SELECT idt, nazt, datkt, ukp, budz, igrac_idk
            FROM tim
            WHERE idt = $1
        `;
        const result = await pool.query(query, [teamId]);
        if (result.rows.length === 0) return null;
        
        const row = result.rows[0];
        return new Team(
            row.idt,
            row.nazt,
            row.datkt,
            row.ukp,
            row.budz,
            row.igrac_idk
        );
    }
}

export default new TeamDAO(); 