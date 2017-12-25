const express = require('express');
const content = require('./models/content');
const router = express.Router();



router.get('/', (req, res) => {
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
            res.send(false);
            throw err;
        }else{
            console.info('Saved to the DB');
            res.send(true)
        }
    })
});

module.exports = router;