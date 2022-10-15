
const express = require('express'),
      mongoose = require('mongoose'),
      corsOptions = require('./config/cors.config'),
      app = express(),
      cors = require('cors'),
      port = 3000,
      notesRoute = require('./routes/routes');

app.use(express.json());

app.use('/notes',cors(corsOptions), notesRoute);
      
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

