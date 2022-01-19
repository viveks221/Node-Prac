const indexRouter = require('./main');
const insertCandidateRouter = require('./insertCandidate')
const insertScoreRouter = require('./insertScore');
const getAvgMaxRouter = require('./getAvgMax')






module.exports = {
  routes: function(app, { MOUNT_POINT = '' }){
    // console.log(MOUNT_POINT);
    if(/^\/$/.test(MOUNT_POINT)){
      MOUNT_POINT = '';
    }
    app.use(`${MOUNT_POINT}/`, indexRouter);
    app.use(`${MOUNT_POINT}/`, insertCandidateRouter);
    app.use(`${MOUNT_POINT}/`, insertScoreRouter);
    app.use(`${MOUNT_POINT}/`, getAvgMaxRouter);


    

    
  }
}
