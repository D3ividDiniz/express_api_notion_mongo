const express = require('express'),
      mongoose = require('mongoose'),  
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000;

const schema = new mongoose.Schema({ title: 'string', content: 'string' });
const Notes = mongoose.model('Note', schema);

module.exports = Notes;