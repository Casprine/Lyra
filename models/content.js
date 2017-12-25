const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title : 'string',
    body : 'string',
    tags : 'array'
});

const content = mongoose.model('content', contentSchema);

module.exports = content;