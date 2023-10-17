const {Router} = require("express")
const {get, login, signup} = require("../controller/controller")
const route = Router()

route.get("/",get)
route.post("/signup",signup)
route.post("/login",login)

module.exports = route