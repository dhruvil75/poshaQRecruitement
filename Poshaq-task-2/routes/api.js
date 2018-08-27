const express = require('express');
const router = express.Router();
const toDo = require('../models/toDoSchema');

//Move Task
router.patch('/move_task/',(req,res,next)=>{
    var task;

    req.body.taskId.forEach(id =>{
        toDo.findOne({"tasks._id":id},function (err,obj){
            if(err){
                res.status(500).json(err);
            }
            else{
                if(obj && obj.tasks){
                    obj.tasks.forEach(element => {
                        if(element.id == id){
                            task = element;
                        }
                    });
                }
            }
        });
        toDo.updateOne({'tasks._id':id},{'$pull':{tasks:{_id:id}}
        }).then(function(obj,err){
            if(err)
                res.status(500).json(err);
            else{
                if(obj.nModified==1 || obj.n ==1){
                    toDo.findById(req.body.labelId, function (err, obj) {
                        if(err){
                            res.status(500).json(err);
                        }
                        else{                       
                            obj.tasks.push(task);
                            obj.save();
                            res.status(200).json(obj);
                        }
                    });
                }
                else{
                    res.status(404).json({message:"No Task with given Id found"});
                }
            }
        })
    });
});


//Task CRUD
router.patch('/update_task/:taskId', function (req, res, next) {

    toDo.updateOne({'tasks._id': req.params.taskId}, {'$set': {
        'tasks.$.task': req.body.task
    }}, function(err,obj){
        if(err)
            res.send(500).json(err);
        else{
            if(obj.nModified ==  1){
                res.status(200).json({"task_modified_id":req.params.taskId});
            }
            else{
                res.status(400).json({message:"No Task with provided Id found"});
            }
        }
    });
});

router.post('/create_task/:labelId', function (req, res, next) {

    if(req.body.task){
        toDo.findById(req.params.labelId, function (err, obj) {
            if(err){
                res.status(500).json(err);
            }
            else{
                obj.tasks.push(req.body);
                obj.save();
                res.status(200).json(obj);
            }
        });
    }
    else{
        res.status(400).json({message:"Request error"});
    }
});
router.delete('/delete_task/:id', function (req, res, next) {
    toDo.findOne({
        'tasks._id': req.params.id
    }, function (err, obj) {
        if(err){
            res.send(500).json(err);
        }
        else{
            if(obj){
                obj.tasks.pull(req.params.id);
                obj.save();
                res.status(200).json(obj);
            }
            else{
                res.send(403).json("Task with the given ID not found");
            }
        }
    });
});







// label CRUD
router.put('/update_label/:todoid', function (req, res, next) {

    toDo.findOne({"_id":req.params.todoid},(err, todo) => {
     
        todo.label = req.body.label;
        todo.save();
        
            if (err) 
                res.status(500).send(err);
            else
                res.status(200).send(todo);
        })
});

router.post('/create_label', function (req, res, next) {

    toDo.create(req.body, function (err, obj) {
        if(err){
            res.status(500).json(err);
        }
        else
            res.status(200).json(obj);
    });

});
router.delete('/delete_label/:id', function (req, res, next) {
    toDo.deleteOne({
        _id: req.params.id
    }, function (err, obj) {
        if(err)
            res.status(500).json(err);
        else{
            if(obj.n==1)
                res.status(200).json({
                    object_deleted_id:req.params.id
                });
            else    
                res.status(403).json({message:"Id not found"})
        }
    });

});
module.exports = router;