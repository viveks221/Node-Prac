const { insertScore } = require('../../../services')
const express = require('express')
const router = express.Router();
router.post('/insert-score', async function (req, res) {
    const payload = req.body
    try {
        const data = await insertScore(payload)
        res.json({
            "status": "sucess",
            messege: "sucessfully inserted the score"
        })
    } catch (err) {
        return res.status(500).json({
            "status": "fail",
            message: err,
        });
    }

});







module.exports = router;