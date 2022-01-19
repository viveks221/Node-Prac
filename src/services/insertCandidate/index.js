const {knex} = require("../../../config/db")
async function insertCandidate(payload) {
    const {
        name,
        email
    } = payload
    console.log(payload)

    try {
        const data = await knex('canditate').insert({
            name: name,
            email_id: email
        })
    } catch (e) {
        throw e;
    }

}
module.exports = insertCandidate;