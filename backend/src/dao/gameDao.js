import pool from "../config/db.js";
import Game from "../model/Game.js";

class GameDAO {
    getAllGames = async () => {
        const query = `
            SELECT
                u.dativru AS game_date,
                r.idr AS round_id,
                kh.idkl AS home_club_id,
                ka.idkl AS away_club_id,
                u.rezu AS result
            FROM utakmica u
            JOIN runda r ON u.runda_idr = r.idr
            JOIN se_nadmece sh ON sh.utakmica_rbu = u.rbu AND sh.utakmica_runda_idr = u.runda_idr AND sh.domacin = '1'
            JOIN se_nadmece sa ON sa.utakmica_rbu = u.rbu AND sa.utakmica_runda_idr = u.runda_idr AND sa.domacin = '0'
            JOIN klub kh ON kh.idkl = sh.klub_idkl
            JOIN klub ka ON ka.idkl = sa.klub_idkl
            ORDER BY r.idr, u.rbu;
        `;

        const result = await pool.query(query);
        return result.rows.map(row => new Game(
            row.game_date,
            row.round_id,
            row.home_club_id,
            row.away_club_id,
            row.result
        ));
    }
}

export default new GameDAO();