const express = require('express')         

const user=require('../model/user')      

const router=express.Router()   

//GET Method              
router.get("/", async(req,res) => { 
    try{                                
        const User=await user.find()                  
        res.json(User)              

    }catch(err){        
        res.send("error:"+err)      
    }
})      

//GET By id                                                 
router.get("/:id", async(req,res) => {          
    try{
        const User=await user.findById(req.params.id)   
        res.json(User)
    }catch(err){
        res.send("error:"+err)
    }
})

//POST Method
router.post("/", async(req,res) => {
    const User= new user({          
        name:req.body.name,
        tech:req.body.tech,
        subs:req.body.subs,
    })
    try{
        const a1=await User.save()
        res.json(a1)
    }catch(err){
        res.send("error"+err)
    }
})

//PATCH Method
router.patch("/:id",async(req,res)=>{
    try{
        const User=await user.findById(req.params.id)
        User.name=req.body.name;
        User.tech=req.body.tech;
        User.subs=req.body.subs;

        const a1=await User.save()
        res.json(a1)

    }catch(err){    
        res.send(err)   
    }
})

//DELETE Method
router.delete("/:id",async(req,res)=>{                                
    try{
        const User=await user.findById(req.params.id)
        const a1=await User.delete()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

module.exports=router




