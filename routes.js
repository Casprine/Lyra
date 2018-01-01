const express = require('express');
const router = express.Router();
const functions = require('./functions');
const content = require('./models/contentModel');



router.get('/hello', (req, res) => {
    res.send('Welcome to Lyra');
});


router.post('/addContent', (req, res) => {
    /* Trying to destructure all values from the object without knowing the keys. Will be glad
        to get a simpler hack around this
     */
    let keys = [];
    let resources = {};

    // Pulling out keys from object to be used in destructuring
    Object.keys(req.body.resources).map(key => {
        keys.push(key);
    });

    // Building the resource object
    keys.map(key => {
        resources[key] = req.body.resources[key];
    });

    let newContent = new content(resources);

    newContent.save((err) => {
        if(err){
            console.log(err);

            res.send({
                status : false,
                payload : 'Failed to save content to database'
            })
        }else{
            console.log('New content saved');

            res.send({
                status : true,
                payload : 'Successfully saved content to database'
            })
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