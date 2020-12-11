const router = require('express').Router();

const empController = require('../controller/empController');
const userController = require("../controller/userController");
router.post('/user/registration',userController.userController);
router.post('/user/login',userController.userLoginController);
router.post('/employee/empReg',empController.empController);
router.get('/employee/empRead',empController.empReadController);
router.put('/employee/empUpdate/:id',empController.empUpdateController);
router.delete('/employee/empDelete/:id',empController.empDeleteController);

module.exports = router;