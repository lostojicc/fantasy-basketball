import pool from "../config/db.js";
import Player from "../model/Player.js";

class PlayerDAO {
    async getPlayersByClub(clubId) {
        const query = `
            SELECT *
            FROM kosarkas k
            JOIN igra i ON k.idkos = i.kosarkas_idkos
            WHERE i.klub_idkl = $1
            ORDER BY k.imekos, k.przkos
        `;
        const result = await pool.query(query, [clubId]);
        return result.rows.map(row => new Player(
            row.idkos,
            row.imekos,
            row.przkos,
            parseInt(row.g) === 1,
            parseInt(row.f) === 1,
            parseInt(row.c) === 1,
            row.fpa
        ));
    }

    async getRecruitedPlayersForTeamAndRound(teamId, roundId) {
        const query = `
            SELECT 
                k.idkos, k.imekos, k.przkos, k.g, k.f, k.c, k.fpa
            FROM regrutuje r
            JOIN kosarkas k ON r.kosarkas_idkos = k.idkos
            WHERE r.se_takmici_idt = $1 AND r.se_takmici_idr = $2
            ORDER BY k.imekos, k.przkos
        `;
        const result = await pool.query(query, [teamId, roundId]);
        return result.rows.map(row => new Player(
            row.idkos,
            row.imekos,
            row.przkos,
            parseInt(row.g) === 1,
            parseInt(row.f) === 1,
            parseInt(row.c) === 1,
            row.fpa
        ));
    }
}

export default new PlayerDAO();