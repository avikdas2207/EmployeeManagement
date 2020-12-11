const registrationModel = require("../models/userRegistrationModel");
class userRegistrationService {
    userRegistration(req,next){
        try{
            let userDetails= {
                "FirstName":req.FirstName,
                "LastName":req.LastName,
                "email":req.email,
                "password":req.password,
                "phone":req.phone
            };
            return registrationModel.create(userDetails).then(result=>{
                return ({message : "data added",data: result})
            }).catch(error=>{
                return ({message: "failed",error: error})
            });
        }catch(error){
            next(error);
        }
    }

    userLogin(req,next){
        try{
            let userLoginDetails= {
                find:{email:req.email},
                password:req.password
            };
            return registrationModel.userLogin(userLoginDetails).then(result=>{
                return ({message : "Logged IN",data: result})
            }).catch(error=>{
                return ({message: "failed to Login",error: error})
            });
        }catch(error){
            next(error);
        }
    }


}


module.exports = new userRegistrationService();