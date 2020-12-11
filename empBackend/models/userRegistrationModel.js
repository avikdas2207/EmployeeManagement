const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

    {
        FirstName :{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true,
            minlength:10,
            maxlength:10
        }
    }

);

const users = mongoose.model('user',userSchema);
class UserModel{

    create(req){
        return new Promise((resolve,reject)=> {
            users.create(req).then((result)=>{
                resolve(result);
            }
        
            ).catch((error)=>{
            reject(error);
        });
        });
    }

    userLogin(req,next){
        try{
        return new Promise((resolve,reject)=> {
            users.findOne(req.find).then((result)=>{
                if(req.password==result.password){
                    resolve({result});
                }else
                {
                    reject({message:"password not correct"});
                }
                
            }).catch((error)=>{
            reject(error);
        });
        });
    }catch(error){
        next(error);
    }
}

}
module.exports = new UserModel();