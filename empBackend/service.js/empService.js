const empModel = require("../models/empModel");
class empRegistrationService {
    empRegistration(req){
        try{
            let empDetails= {
                "FirstName":req.FirstName,
                "LastName":req.LastName,
                "email":req.email,
                "password":req.password,
                "phone":req.phone
            };
            return empModel.create(empDetails).then(result=>{
                return ({message : "data added",data: result})
            }).catch(error=>{
                return ({message: "failed",error: error})
            });
        }catch(error){
            next(error);
        }
    }


    empRead(req,next){
        try{
            return empModel.read().then(result=>{
                return ({message : "data updated",data: result})
            }).catch(error=>{
                return ({message: "failed",error: error})
            });
        }catch(error){
            next(error);
        }
    }










    empUpdate(req,next){
        try{
            return empModel.empUpdate(req).then(result=>{
                return ({message : "data updated",data: result})
            }).catch(error=>{
                return ({message: "failed",error: error})
            });
        }catch(error){
            next(error);
        }
    }

    empDelete(req,next){
        try{
            return empModel.empDelete(req).then(result=>{
                return ({message : "data deleted",data: result})
            }).catch(error=>{
                return ({message: "failed",error: error})
            });
        }catch(error){
            next(error);
        }
    }

}

module.exports = new empRegistrationService();