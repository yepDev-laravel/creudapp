const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port=3000;

const app = express();



app.listen(port, ()=>{
    console.log('Express server listening on port')
})