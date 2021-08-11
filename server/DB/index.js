const mongoose = require('mongoose');
const dotenv = require('dotenv');

const CONNECTION_URL = process.env.CONNECTION_URL || 5000;

mongoose.connect(CONNECTION_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Database connected...")})
    .catch(()=>{console.log("We have error connecting")})

    module.exports=mongoose.connection