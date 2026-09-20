let express = require("express");
let app= express();
let mongoose = require("mongoose")
require("dotenv").config()
let cors= require("cors");
const authRouter = require("./routes/authRoutes");
app.use(express.json())
app.use(
  cors({
    origin: "https://authenticationsystem-sigma.vercel.app",
    credentials: true,
  })
);
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use("/auth",authRouter)


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Mongoose is connected")
    app.listen(process.env.PORT)
})
