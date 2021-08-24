const express = require('express');
const bodyParser = require("body-parser");

let app = express();


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>
{
    res.status(200).send({
        message:"Hello World",
    }
        
    )
})

app.listen('3000')