let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
let userModal = mongoose.model("userModal",userSchema)
module.exports=userModal