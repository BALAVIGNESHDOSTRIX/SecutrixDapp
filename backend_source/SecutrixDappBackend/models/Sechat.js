var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SechatSchema = new Schema({

        name : {
            type : String,
            required : true 
        },
        from : {

            type : String,
            required : true 
        },
        to : {

            type : String,
            required : true 
        },
        blockno : {
            type : Number,
            required : true 
        },
        transid : {
            type : String,
            required : true 
        },
        message : {
            type : String,
            required : true 
        }
},{
    timestamps: true
});

var Sechat = mongoose.model('sechat',SechatSchema);

module.exports = Sechat;