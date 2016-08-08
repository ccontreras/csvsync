let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let fileSchema = new Schema({
    name: String,
    extension: String
});

module.exports = mongoose.model('File', fileSchema);
