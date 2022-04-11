const mongoose = require('mongoose');

mongoose.connect('mongodb://localhosto/nodedata', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose;

