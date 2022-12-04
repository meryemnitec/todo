const express=require('express');
const todo = require('../schemas/todo');
const Todo = require('../schemas/todo');
const router=express.Router();


router.get("/", async (req,res)=>{
   const todos= await todo.find();
res.json(todos);
});

router.get('/:id', async(req,res)=>{
    const todoId =req.params.id;
    const todo= await Todo.findById(todoId);
    res.json(todo)
})

router.post ('/create',async (req,res)=>{
 const createdTodo= await(await todo.create(req.body)).save();
res.json(createdTodo);
});

router.patch("/update/:id",async(req,res)=>{
const todoId =req.params.id;
 const updatedTodo = await Todo.findByIdAndUpdate(todoId,req.body,{
    new:true,
 });
 res.json(updatedTodo);
});

router.delete('/delete/:id',async(req,res)=>{
    const todoId=req.params.id;
    const deletedTodo=await Todo.findByIdAndDelete(todoId);
    res.json(deletedTodo);
})

module.exports=router;
