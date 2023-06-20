const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: {type:String ,trim:true},
        isGroupChat:{type:Boolean , default:false},
        users:[{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:
                mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        },
        {
            timestamps:true // store timestamp every time called
        }
        
);


const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;


// isgroup
// groupadmin
// latestmessage
//user name
// chatName
