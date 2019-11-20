var mongoose=require('mongoose');
var signupschema=new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:String,
        bday:Date,
        gender:String,
        option1:String,
        address:String,
        country:String,
        phone:Number,
        pswd:String,
        pswd1:String
    }
)
var signupModel=mongoose.model('signupp',signupschema);
module.exports={signupModel};