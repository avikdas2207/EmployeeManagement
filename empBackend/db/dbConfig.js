const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Employee_mgt",{useNewUrlParser: true}).then(()=>{
    console.log("successfully connected");
}).catch(()=>{
    console.log("failed");
});