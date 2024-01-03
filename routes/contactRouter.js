const express=require('express');
const router=express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({
        "message":"get all contacts"
      });
});

router.route('/').post((req,res)=>{
    res.status(200).json({
        "message":`created contact ${req.body.name}`
      });
});

router.route('/:id').put((req,res)=>{
    res.status(200).json({
        "message":`updated for ${req.params.id}`
      });
});

router.route('/:id').delete((req,res)=>{
    res.status(200).json({
        "message":`deleted for ${req.params.id}`
      });
});


module.exports=router;
