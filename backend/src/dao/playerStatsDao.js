import pool from "../config/db.js";
import PlayerStats from "../model/PlayerStats.js";

class PlayerStatsDAO {
    async getPlayerStatsForRoundAndTeam(playerId, roundId, teamId) {
        const query = `
            SELECT 
                os.igra_kosarkas_idkos, os.igra_klub_idkl, os.se_nadmece_rbu, 
                os.se_nadmece_idr, os.p, os.s, os.a, os.u, 
                os.lg, os.b, os.pb, os.ps, os.f, os.psb, os.il
            FROM ostv_stat os
            JOIN regrutuje r ON os.igra_kosarkas_idkos = r.kosarkas_idkos
            WHERE os.igra_kosarkas_idkos = $1 
                AND os.se_nadmece_idr = $2 
                AND r.se_takmici_idt = $3
                AND r.se_takmici_idr = $2
        `;
        const result = await pool.query(query, [playerId, roundId, teamId]);
        
        if (result.rows.length === 0) return null;
        
        const row = result.rows[0];
        return new PlayerStats(
            row.igra_kosarkas_idkos,
            row.igra_klub_idkl,
            row.se_nadmece_rbu,
            row.se_nadmece_idr,
            row.se_nadmece_idkl,
            row.p,
            row.s,
            row.a,
            row.u,
            row.b,
            row.il,
            row.psb,
            row.lg,
            row.ps,
            row.f,
            row.pb
        );
    }
}

export default new PlayerStatsDAO(); 