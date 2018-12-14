var express = require('express')
var router = express.Router();
var sha1 = require('sha1');

router.get('/', (req, res, next) => {
    let { signature, timestamp, nonce, echostr } = req.query;
    // token =  mywechat
    let arr = ['mywechat', timestamp, nonce].sort().join('');
    arr = sha1('arr');
    if(arr=== signature){
        res.end(echostr)
    } else {
        res.end('')
    }

    res.send("????")
})

module.exports = router;