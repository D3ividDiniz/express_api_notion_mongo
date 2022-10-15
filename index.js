
const express = require('express'),
      mongoose = require('mongoose'),
      app = express(),
      port = 3000,
      notesRoute = require('./routes/routes');

app.use( (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});

app.use(express.json());

app.use('/notes', notesRoute);
      
app.get('', (req,res)=>{
    res.json({message:"Welcome to my app! "});
})

mongoose
    .connect('mongodb+srv://deivid:Z2s65Mw3W8hF7DGU@notas.6x6ipal.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        app.listen(port,()=>{
            console.log('connected');
        })
    })
    .catch(err=>{
        console.log(err);
        app.json({message: err});
    })

