let express=require("express")
const { signIn, login, logout, profile } = require("../controllers/authControllers")
const profileMiddleware = require("../middleware/profileMiddleware")
// const signIn = require("../controllers/authControllers")
let authRouter = express.Router()

authRouter.post("/signin",signIn)
authRouter.post("/login",login)
authRouter.post("/logout",logout)
authRouter.get("/profile",profileMiddleware,profile)
module.exports=authRouter