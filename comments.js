// Create web server  that can listen for requests
// and respond to them

// Import express library
const express = require('express');
// Import body-parser library
const bodyParser = require('body-parser');
// Import mongoose library
const mongoose = require('mongoose');

// Import models
const Comments = require('../models/comments');

// Create router object
const commentRouter = express.Router();


