var express = require('express')
var router = express.Router();
var path = require('path')

router.get('/',(req, res,next) => {
    res.sendFile(path.resolve(__dirname, '../pages/wechat.html'))
})

module.exports = router