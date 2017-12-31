const express = require('express');
const router = express.Router();
const functions = require('./functions');
const content = require('./models/contentModel');



router.get('/hello', (req, res) => {
    res.send('Welcome to Lyra');
});

/*
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
*/

router.post('/createModel', (req, res) => {
    console.log(req.body.model);
    functions.createContentModel(req.body.model, result => {
        if(result){
            res.send({
                status : true,
                payload : 'Model has been saved'
            })
        }else{
            res.send({
                status : false,
                payload : 'Model failed to save'
            })
        }
    })
});


router.get('/readContentModel', (req, res) => {
    functions.readContentModel(data => {
        if(data){
            res.send({
                status : true,
                payload : data
            })
        }else{
            res.send({
                status : false,
                payload : 'Failed to read model. Probably it has not been created yet'
            })
        }
    })
});

module.exports = router;