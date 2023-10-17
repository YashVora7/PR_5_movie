const userModel = require("../model/schema")

const get = async(req,res) =>{
    let data = await userModel.find()
    res.send(data)
}

const signup = async(req,res) =>{
    let {email} = req.body
    let data = await userModel.findOne({email: email})

    if(!email == data){
        let create = await userModel.create(req.body)
        res.send(create)
    }
    else{
        res.send("user already registered")
    }
}

const login = async(req,res) =>{
    let {email, password} = req.body

    let user = await userModel.findOne({email: email})

    if(!user){
        res.send("user not found")
    }
    else if(!password == password){
        res.send("password is incorrect")
    }
    else{
        res.send("Logged in successfully")
    }
}

module.exports = {get, signup, login}