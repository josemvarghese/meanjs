var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongojs = require('mongojs');
// mongo db collection, collections that listed array can use here
 /*  collections are basically tables in mongodb */
var db = mongojs('mongodb://jose:jose@ds025603.mlab.com:25603/tasks',['user']);
const saltRounds = 10;
const myPlaintextPassword = 'jose';
const someOtherPlaintextPassword = 'not_bacon';


router.post('/signup',function(req,res,next) {
		
	var userInfo = req.body;
    console.log(userInfo);
    // next();
	// if(!task.title || !(task.isDone+'')){
	// 	res.status(400)
	// }
	// else{
		// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
		// 	console.log(myPlaintextPassword);
		// 	console.log(hash);
		// // Store hash in your password DB.
		// });

		db.user.save(userInfo,function(err,user){
			if(err){
				res.send(err);
			}
			res.json(user);
		});


	// }

});



module.exports = router;