var express = require('express')
var router = express.Router();


router.get('/', (req, res, next) => {
    console.log(req.query);
    res.send("????")
})

module.exports = router;