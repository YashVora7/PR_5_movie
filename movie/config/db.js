const mongoose = require('mongoose');

const connect = async()=>{
    await mongoose.connect("mongodb+srv://Yash:Vora@cluster0.gejvp8g.mongodb.net/?retryWrites=true&w=majority")
    console.log("Connected to MongoDB");
}

module.exports = connect