const mongoose = require('mongoose');
const fs = require('fs');

// I made reading the file synchronous so mongoose makes no mistake when file is exported
let model = JSON.parse(fs.readFileSync('model.json'));

let contentModelSchema = mongoose.Schema(model);

let content = mongoose.model('content', contentModelSchema);

module.exports = content;

