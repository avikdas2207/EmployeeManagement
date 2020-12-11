const express = require('express');
const app = express();
const cors = require('cors');
const routes = require("./routes/route");
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(3000,()=>{
    console.log("server started");
    require("./db/dbConfig");
});