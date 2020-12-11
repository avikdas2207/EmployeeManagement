const userService = require("../service.js/userRegistrationService");
const response = {};
class userController{
    userController(req,res){
        console.log(req.body);
    userService.userRegistration(req.body).then(result=>{
        response.success=true;
        response.message=result.message;
        response.data=result.data;
        return res.status(200).send(response);
    }).catch((error) => {
        response.success=false;
        response.message=error.message;
        response.data=error.error;
        return res.status(400).send(response);
    });
}


    userLoginController(req,res){
        console.log(req.body);
    userService.userLogin(req.body).then(result=>{
        response.success=true;
        response.message=result.message;
        response.data=result.data;
        return res.status(200).send(response);
    }).catch((error) => {
        response.success=false;
        response.message=error.message;
        response.data=error.error;
        return res.status(400).send(response);
    });
    }


}
module.exports = new userController();