var express = require('express');
var PATH = require('path')
var router = express.Router();

router.get('/',function(req, res, next){
   res.sendFile(PATH.resolve(__dirname  ,'../public/mock/cookbook-category.json'))
})

module.exports = router