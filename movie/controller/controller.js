const movieModel = require("../model/movie.schema")
const userModel = require("../model/schema")

const get = (req,res) =>{
    res.send("Welcome to the movie API")
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

const userdata = async(req,res) =>{
    let data = await userModel.find()
    res.send(data)
}

const createmovie = async(req,res) =>{
    let data = await movieModel.create(req.body)
    res.status(201).send(data)
}

const deletemovie = async(req,res)=>{
    let { id } = req.params
    let data = await movieModel.findByIdAndDelete(id)
    let all = await movieModel.find()
    res.status(200).send(data.all)
}

const updatemovie = async(req,res)=>{
    let { id } = req.params
    let data = await store.findByIdAndUpdate(id, req.body)
    let movies = await store.find()
    res.send(data.movies)
}

module.exports = {get, signup, login, userdata, createmovie, deletemovie, updatemovie}