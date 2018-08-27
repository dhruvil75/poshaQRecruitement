const mong = require('mongoose');
const Schema = mong.Schema;

const testSchema = new Schema({
    category:{
        type:String,
        required: true
    }
});


const a = mong.model('small_db', testSchema);
module.exports = a;