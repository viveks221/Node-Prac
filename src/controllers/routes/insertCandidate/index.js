const {insertCandidate}  = require('../../../services')
const express = require('express')
const router = express.Router();
router.post('/insert-candidate',async function(req, res) {
    const payload = req.body
    try {
const data = await insertCandidate(payload)
res.json({
    messege: "sucessfully inserted the record"
})
    }
    catch (err) {
        return res.status(500).json({
            "status": "fail",
            message: err,
        });
    }
   
  });
  
  
  
  
  
  
  
  module.exports = router;
  