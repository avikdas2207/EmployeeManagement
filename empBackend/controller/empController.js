const empService = require("../service.js/empService");
const response = {};
class empController{
    empController(req,res){
        console.log(req.body);
    empService.empRegistration(req.body).then(result=>{
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


empReadController(req,res){
empService.empRead().then(result=>{
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



empUpdateController(req,res){
    console.log(req.body);
empService.empUpdate(req).then(result=>{
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

empDeleteController(req,res){
    console.log(req.params);
empService.empDelete(req).then(result=>{
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

module.exports = new empController();