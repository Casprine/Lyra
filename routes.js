const express = require('express');
const content = require('./models/content');
const router = express.Router();



router.get('/hello', (req, res) => {
    res.send('Welcome to Lyra');
});


router.post('/addContent', (req, res) => {
    let title = req.body.content.title;
    let body = req.body.content.body;

    let newContent = new content({
        title : title,
        body : body
    });

    newContent.save((err, content) => {
        if(err){
            console.error('There was an error while trying to save to the Database');
            res.send({
                status : false,
                payload : 'Error while trying to save to the Database'
            });
            throw err;
        }else{
            console.info('Saved to the DB');
            res.send({
                status : true,
                payload : 'Data saved to database successfully'
            });
        }
    })
});

router.get('/retrieveContent', (req, res) => {
    content.find().exec((err, result) => {
        if(err){
            console.error('Error while finding items in DB');
            res.send({
                status : false,
                payload : null
            });
            throw err;
        }else{
            console.info('Found items in DB');
            res.send({
                status : true,
                payload : result
            })
        }
    })
});

module.exports = router;