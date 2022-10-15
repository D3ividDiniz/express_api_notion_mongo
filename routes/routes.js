const express = require('express'),
      mongoose = require('mongoose'),
      app = express(),
      router = express.Router(),
      Notes = require('../schema/notes.model');

// define the home page route
router.post('/',  async (req,res)=>{
    const {title,content} = req.body;
    if(!title){
        res.status(422).json({message:"erro"});
    }

    const notebook = {
        title,
        content
    }

    try{
        const newNotebook = await Notes.create(notebook);
        res.status(201).json({status:true, message:"iserido com sucesso", notebook:newNotebook})
    }catch (err){
        res.status(500).json({status:false, message:err});
    }
})
router.get('/', async (req,res)=>{
    try{
        const notes = await Notes.find();
        res.status(201).json(notes)

    }catch(err){
        res.status(501).json({message:err})

    }
})
router.get('/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        const notes = await Notes.findOne({_id:id});
        res.status(201).json(notes)

    }catch(err){
        res.status(501).json({message:err})

    }
})
router.patch('/:id', async (req,res)=>{
    const id = req.params.id;
    const {title, content} = req.body;
    const notebook = {
        title,
        content
    }

    try{
        await Notes.updateOne({_id:id},notebook)
        res.status(201).json(notebook)

    }catch(err){
        res.status(501).json({message:err})

    }
})
router.delete('/:id', async (req,res)=>{
    const id = req.params.id;

    try{
        await Notes.deleteOne({_id:id})
        res.status(201).json(notebook)

    }catch(err){
        res.status(501).json({message:err})

    }
})

module.exports = router;
