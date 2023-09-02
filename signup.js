const express =require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const port= process.env.port|| 8000;
const homeRouter = require('./routers/homeRouter');
const app = express();


//db connection
mongoose.connect('mongodb://localhost:27017/signupData',{useNewUrlParser:true});
const db=mongoose.connection;
db.on("error",()=>{console.log("error in connection");});
db.once('open',()=> {console.log("Connected");});





app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use(bodyParser.json())




app.use('/', homeRouter);
app.listen(port, function(err, res){
    console.log("Server is running");
})
