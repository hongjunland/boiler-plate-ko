const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@education.d1tcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false,
}).then(()=>console.log('MongoDB Connected....'))
.catch(err=>console.error(err))
app.get('/',(res,req)=> res.send("Hello World"));

app.listen(port,()=>console.log(`Example app listsd on port ${port}!`));