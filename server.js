const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const studentRoute=require('./routes/studentRoute')
const port=3000;
const app = express();

app.use(express.static('public/assets/css'))
app.use(express.static('public/assets/img'))
app.use(express.static('public/assets/js'))
app.use(express.json())
app.use(express.urlencoded({ extended:true}));

app.set('view engine', 'ejs');
app.use(studentRoute)

app.get('/',(req, res)=>{
    console.log("nous sommes sur la homme page")
    res.send('hi')
})

app.listen(port, ()=>{
    console.log('Express server listening on port')
})