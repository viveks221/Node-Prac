const {getAvgMax}  = require('../../../services')
const express = require('express')
const router = express.Router();
router.get('/get',async function(req, res) {
    try {
const data = await getAvgMax()
res.json({
    "hello" : data[0]
})
    }
    catch(error){
        return error
    }
   
  });
  
  
  
  
  
  
  
  module.exports = router;
  