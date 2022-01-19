const {knex} = require("../../../config/db")
async function insertScore(payload) {
    const {candidate_id , first_round, second_round, third_round} = payload

try {
    const data = await knex('test_score').insert({
        candidate_id,
        first_round,
        second_round,
        third_round
    })
} catch (e) {
    console.log(e);
}

}
module.exports = insertScore;