var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocRegisSchema = new Schema({

        name : {
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
        from : {
            type : String,
            required : true,
            unique : true
        },
        fullname : {
            type : String,
            required : true
        },
        kychash : {
            type : String,
            required : true 
        }
},{
    timestamps: true
});

var DocReg = mongoose.model('docreg',DocRegisSchema);

module.exports = DocReg;