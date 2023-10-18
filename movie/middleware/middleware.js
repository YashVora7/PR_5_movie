const check = (req,res,next)=>{
    let {email, password} = req.body

    if(email&&password){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}

module.exports = check