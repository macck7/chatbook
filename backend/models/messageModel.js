const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    content:{ type : string , trim:true},
    chat:{ type: mongoose.Schema.Types.ObjectId , ref:"User"},
},
    {
        timestamps:true
    }

);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;





// whose have send this
// what is message
// whose it belongs to