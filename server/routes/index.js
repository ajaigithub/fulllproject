 var express = require('express');
 var router  = express.Router();

 router.get('/',function(req,res) {
   res.send({
     message:'helloworld!'
   })
 })
 module.exports = router
 const Othercontribs=require('../controller/controller');
 //create
 router.post('/api/Othercontribs/c',Othercontribs.create);
//retrive all
router.get('/api/Othercontribs',Othercontribs.getall);
//delete
router.delete('/api/Othercontrib/:name',Othercontribs.delete);