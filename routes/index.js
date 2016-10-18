import express from 'express';

var router = express.Router();

router.get('/home', function(req, res){
    res.render('index',{
            title: 'My site'
        });
});
module.exports = router;

