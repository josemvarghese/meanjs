var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// mongo db collection, collections that listed array can use here
 /*  collections are basically tables in mongodb */
var db = mongojs('mongodb://jose:jose@ds025603.mlab.com:25603/tasks',['user']);



router.post('/signup',function(req,res,next) {
		
	var userInfo = req.body;
    console.log(userInfo);
    // next();
	// if(!task.title || !(task.isDone+'')){
	// 	res.status(400)
	// }
	// else{
		db.user.save(userInfo,function(err,user){
			if(err){
				res.send(err);
			}
			res.json(user);
		});
	// }

});



module.exports = router;