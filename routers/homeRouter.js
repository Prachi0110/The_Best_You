const express= require("express");
const router= express.Router();
const homeSchema =require('../models/homeSchema');

router.get('/',function(err, res){
    // res.send(err.user);
    res.render('index',{Name: err.user});
})
router.get('/workouts',function(err, res){
    res.render('workouts');
})
router.get('/about',function(err, res){
    res.render('about');
})
router.get('/rateUs',function(err, res){
    res.render('rateUs');
})
router.get('/register',function(err, res){
    res.render('register',{title:'', password:'', email:''});
})
router.get('/login',  function(err, res){
    res.render('login');
})
router.get('/test1',function(err, res){
    res.render('test1');
})
router.get('/test2',function(err, res){
    res.render('test2');
})
router.get('/profile',function(err,res){
    res.render('profile')
})
router.post('/register', async(req,res)=>{
     try{
          const {
            name,
             email,
             password,
             cpassword
            } =req.body;
            if(password===cpassword){
                const userData= new homeSchema({
                    name,
                    email,
                    password,  
                })
                userData.save(err=>{
                    if(err){
                        console.log("err");
                    }else{
                        // res.render('register',{title:'Done', password:'', email:''});
                        res.render('recipies');
                    }
                })
            const userEmail= await homeSchema.findOne({email:email});
            if(email=== userEmail.email){
                res.render('register',{title:'', password:'', email:'email already exists'});
            }else{
                console.log(err);
            }
            }else{
                res.render('register',{title:'',password:'Password not matched', email:''}); 
            }
     }catch(error){
        res.render('register',{title: 'Error',password:'', email:''});
     }
})


//login

router.post('/login',(req ,res)=>{
    const{
        email,
        password
    }=req.body;
    homeSchema.findOne({email:email},(err,result)=>{
        if(email===result.email && password===result.password){
            res.render('recipies');
        }else {
            console.log(err);
            res.render('login',{title: 'Error',password:'', email:''});

        }
    })
})


module.exports= router;