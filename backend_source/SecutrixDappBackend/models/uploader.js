var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UploaderSchema = new Schema({

        name : {

            type : String,
            required : true
        },
        from :{
            type : String,
            required : true,
           
        },
        certname : {

            type : String,
            required : true,
        },
        blockno : {
            type : Number,
            required : true 
        },
        transid : {
            type : String,
            required : true 
        },
        ipfshash : {

            type : String ,
            required : true 
        },
        description : {

            type : String,
            required : true
        }

},{
    timestamps: true
});

var User = mongoose.model('uploader',UploaderSchema);

module.exports = User;