var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// mongo db collection, collections that listed array can use here
 /*  collections are basically tables in mongodb */
var db = mongojs('mongodb://jose:jose@ds025603.mlab.com:25603/tasks',['tasks']);

router.get('/tasks',function(req,res,next) {
		db.tasks.find(function(err,tasks){

			if(err){
				res.send(err);
			}
			res.json(tasks);

		})
});
router.get('/task/:id',function(req,res,next) {
		db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){

			if(err){
				res.send(err);
			}
			res.json(task);

		})
});

router.post('/tasks',function(req,res,next) {
		
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

router.delete('/task/:id',function(req,res,next) {
		db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task){

			if(err){
				res.send(err);
			}
			res.json(task);

		})
});

router.put('/task/:id',function(req,res,next) {
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

module.exports = router;