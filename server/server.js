const dotenv=require('dotenv')
dotenv.config();
const cors=require('cors');
const express=require('express');
const db =require('./DB')
const path=require('path');
const userRouter = require('./routes/routes');
const PORT=process.env.PORT || 8080;

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

db.on('error',()=>console.log('error'));

app.listen(PORT,()=>{
    console.log(`Server is up on port: ${PORT}`);
})
app.use('/api/users',userRouter)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }