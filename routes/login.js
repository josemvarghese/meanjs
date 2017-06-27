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


function comparePassword(myPlaintextPassword,hash){
	bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
		// res == true 
		console.log('res0'+res);
		console.log('error '+err);

	});
};


function hashPassword(userpwd){
		bcrypt.hash(userpwd, saltRounds, function(err, hash) {
			console.log(userpwd);
			console.log(hash);
			return hash;
		// Store hash in your password DB.		
		});
};	



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
		// var pwwd= hashPassword(userInfo.password);
		// userInfo.password=pwwd;
		// console.log('pwwd'+pwwd);
		// console.log('userInfo'+userInfo);
				bcrypt.hash(userInfo.password, saltRounds, function(err, hash) {
						db.user.save({email:userInfo.email,password:hash},function(err,user){
							if(err){
								res.send(err);
							}
							res.json(user);
						});
				});


		


	// }

});



module.exports = router;