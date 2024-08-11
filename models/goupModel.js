const mongoose = require('mongoose');
const Counter = require('./counterModel');

const groupSchema = mongoose.Schema({
    GroupId: {
        type: Number,
        unique: true
    },
    GroupName:{
        type:String,
        required:true
    },
    GroupTopic:{
        type:String,
        required:true
    },
    GroupDescription:{
        type:String,
        required:true
    },
    GroupLocation:{
        type:String,
        required:true
    },
    GroupImage:{
        type:String,
        required:true
    },
    GroupCreationDate:{
        type:Date,
        default:Date.now
    }

});
groupSchema.pre('save', async function(next) {
    const doc = this;
    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'groupid' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        doc.GroupId = counter.seq;
        next();
    } catch (error) {
        next(error);
    }
});
module.exports = mongoose.model("Group",groupSchema);

