const mongoose=require("mongoose");
const {Schema,model}=mongoose;

const UserSchema=new Schema({
    username:{
        type:String,
        unique:true,
        min:4,
        required:true
    },
    pasword:{
        type:String,
        required:true,

    }
});

const UserModel=model('UserModel',UserSchema);
module.exports=UserModel;