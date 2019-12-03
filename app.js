const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const router1= require('./Routers/Images')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router1);

module.exports=app;