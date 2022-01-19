const {
    knex,
    connection
} = require("../../../config/db")
async function getAvgMax() {

    const avgQuery = ` select  AVG(first_round) as first_round_avg, AVG(second_round) as second_round_avg, AVG(third_round) as third_round_avg
from test_score`;
    const highestScorer = `select candidate_id, max(first_round+second_round+third_round) as max_score from test_score
group by candidate_id
having max(first_round+second_round+third_round)= (select max(first_round+second_round+third_round) from test_score)`
    try {
        let data = await connection.promise().query(avgQuery);
        const data2 = await connection.promise().query(highestScorer);
        data[0].push(data2[0][0])

        return data;

    } catch (err) {
        return res.status(500).json({
            "status": "fail",
            message: err,
        });
    }


}
module.exports = getAvgMax;