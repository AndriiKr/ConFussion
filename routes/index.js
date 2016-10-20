import express from 'express';

var router = express.Router();

router.get('/home', function(req, res){
    res.render('index',{ //ссылка на файл
            title: 'My site'
        });
});

router.get('/about_us', function(req, res){
    res.render('about_us',{
            title: 'My site'
        });
});

router.get('/room_details', function(req, res){
    res.render('room_details',{
            title: 'My site'
        });
});

router.get('/rooms_2', function(req, res){
    res.render('rooms_2',{
            title: 'My site'
        });
});

router.get('/payment', function(req, res){
    res.render('payment',{
            title: 'My site'
        });
});

router.get('/conf_room', function(req, res){
    res.render('conference_room',{
            title: 'My site'
        });
});

router.get('/wed_hall', function(req, res){
    res.render('wedding_hall',{
            title: 'My site'
        });
});

router.get('/restaurant', function(req, res){
    res.render('restaurant',{
            title: 'My site'
        });
});

router.get('/single_blog', function(req, res){
    res.render('blog',{
            title: 'My site'
        });
});

router.get('/contact', function(req, res){
    res.render('contact',{
            title: 'My site'
        });
});
module.exports = router;

