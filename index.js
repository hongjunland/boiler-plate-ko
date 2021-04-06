const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const config = require('./config/key')
const {User} = require('./models/User');

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false,
}).then(()=>console.log('MongoDB Connected....'))
.catch(err=>console.error(err));
app.get('/',(req,res)=> res.send("Hello World!2222!"));

app.post('/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,doc)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    });

})

app.listen(port,()=>console.log(`Example app listsd on port ${port}!`));