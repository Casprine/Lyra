const fs = require('fs');

// This is a function used to build model objects for mongoose
const createContentModel = (models, callback) => {
    let contentModel = {};
    models.map(model => {
        contentModel[model.resourceName] = model.datatype;
    });
    fs.writeFile('model.json', JSON.stringify(contentModel, null, 2), err => {
        if(err){
            console.log(err);
            callback(false);
        }else{
            console.log('Model saved');
            callback(true);
        }
    });

};


const readContentModel = callback => {
    fs.readFile('model.json', (err, data) => {
        if(err){
            callback();
        }else{
            callback(JSON.parse(data))
        }
    })
};

exports.createContentModel = createContentModel;
exports.readContentModel = readContentModel;

