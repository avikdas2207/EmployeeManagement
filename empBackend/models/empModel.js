const mongoose = require('mongoose');

const empSchema = new mongoose.Schema(

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
        phone:{
            type:String,
            required:true,
            minlength:10,
            maxlength:10
        }
    }

);

const emp = mongoose.model('emp',empSchema);
class empModel{

    create(req){
        return new Promise((resolve,reject)=> {
            emp.create(req).then((result)=>{
                resolve(result);
            }
        
            ).catch((error)=>{
            reject(error);
        });
        });
    }


    read(req){
        return new Promise((resolve,reject)=> {
            emp.find().then((result)=>{
                resolve(result);
            }
        
            ).catch((error)=>{
            reject(error);
        });
        });
    }





    empUpdate(req,next){
        return new Promise((resolve,reject)=> {
            emp.findByIdAndUpdate(req.params.id,req.body).then((result)=>{
                    resolve(result);
                
            }).catch((error)=>{
            reject(error);
        });
        });
    }catch(error){
        next(error);
    }


    empDelete(req,next){
        return new Promise((resolve,reject)=> {
            emp.findByIdAndRemove(req.params.id,req.body).then((result)=>{
                    resolve(result);
            }).catch((error)=>{
            reject(error);
        });
        });
    }catch(error){
        next(error);
    }


}

module.exports = new empModel();