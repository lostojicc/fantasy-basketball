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

    getNewId = async () => {
        const query = "SELECT COALESCE(MAX(idkos), 0) + 1 AS next_id FROM kosarkas";
        const result = await pool.query(query);
        return result.rows[0].next_id;
    }

    registerNewPlayer = async (playerDto) => {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            
            const playerResult = await client.query(
                'INSERT INTO kosarkas (idkos, imekos, przkos, g, f, c, fpa) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING idkos',
                [
                    await this.getNewId(), 
                    playerDto.firstName, 
                    playerDto.lastName, 
                    playerDto.isGuard ? '1' : '0',
                    playerDto.isForward ? '1' : '0',
                    playerDto.isCenter ? '1' : '0',
                    null
                ]
            );
            const playerId = playerResult.rows[0].idkos;

            await client.query(
                'INSERT INTO igra (datpr, kosarkas_idkos, klub_idkl) VALUES ($1, $2, $3)',
                [new Date(), playerId, playerDto.clubId]
            );

            await client.query('COMMIT');
            console.log('✅ Transaction committed successfully');
        } catch (error) {
            await client.query('ROLLBACK');
            console.log('❌ Transaction rolled back due to error:', error.message);
            throw error;
        } finally {
            client.release();
        }
    }
}

export default new PlayerDAO();