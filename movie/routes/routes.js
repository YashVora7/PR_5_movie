const {Router} = require("express")
const {get, login, signup, userdata, createmovie, deletemovie, updatemovie} = require("../controller/controller")
const check = require("../middleware/middleware")
const route = Router()

route.get("/",get)
route.post("/user/signup",signup)
route.post("/user/login",check,login)
route.delete("/user/delete/:id")

route.get("/user",userdata)
route.post("/movie/create",check,createmovie)
route.delete("/movie/delete/:id",deletemovie)
route.patch("/movie/update/:id",updatemovie)
// route.patch("/movie/rating/:id",rating)

module.exports = route