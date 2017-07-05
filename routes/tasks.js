var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// mongo db collection, collections that listed array can use here
 /*  collections are basically tables in mongodb */
 var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);
var db = mongoose.Model('tasks');
// mongojs('mongodb://jose:jose@ds025603.mlab.com:25603/tasks',['tasks']);

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){
		router.get('/tasks',isAuthenticated,function(req,res,next) {
				db.tasks.find(function(err,tasks){

					if(err){
						res.send(err);
					}
					res.json(tasks);

				})
		});
		router.get('/task/:id',isAuthenticated,function(req,res,next) {
				db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){

					if(err){
						res.send(err);
					}
					res.json(task);

				})
		});

		router.post('/tasks',isAuthenticated,function(req,res,next) {
				
			var task = req.body;
			if(!task.title || !(task.isDone+'')){
				res.status(400)
			}
			else{
				db.tasks.save(task,function(err,task){
					if(err){
						res.send(err);
					}
					res.json(task);
				});
			}

		});

		router.delete('/task/:id',isAuthenticated,function(req,res,next) {
				db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){

					if(err){
						res.send(err);
					}
					res.json(task);

				})
		});

		router.put('/task/:id',isAuthenticated,function(req,res,next) {
				var task = req.body;
				var updateTask = {};
				if(task.isDone){
					updateTask.isDone = task.isDone;
				}
				if(task.title){
					updateTask.title = task.title;
				}
				if(!updateTask){
					res.status(400);
				}
				else{
					db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updateTask,{},function(err,task){
						if(err){
							res.send(err);
						}
						res.json(task);

					});
				}
		});
};
// module.exports = router;