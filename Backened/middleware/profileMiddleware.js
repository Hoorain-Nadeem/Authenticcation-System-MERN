const  jwt  = require("jsonwebtoken");
const userModal = require("../models/userModel");

let profileMiddleware =async (req,res,next) => {
    try{
    let token = req.cookies.token;

    if(!token){
        return res.send({
            message:"Unauthorized"
        })
    }

    let decoded = jwt.verify(token,process.env.SECRET_KEY)
     req.user = await userModal.findById(decoded.id)
     
   next()
   }catch(err){
    return res.send(err)
   }
}
module.exports=profileMiddleware;