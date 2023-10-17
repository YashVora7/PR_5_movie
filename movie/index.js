const express = require('express');
const route = require('./routes/routes');
const connect = require('./config/db');
const app = express();
app.use(route)
app.use(express.json())



app.listen(8090,()=>{
    connect()
    console.log("Server listening on 8090");
})