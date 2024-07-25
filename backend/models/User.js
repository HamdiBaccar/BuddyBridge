const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    CIN: {
        type: String,
        required: true,
        unique: true,
    },
    parentName: {
        type: String,
        required: true,
    },
    parentEmail: {
        type: String,
        required: true,
        unique: true,
    },
    parentPassword: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentInfo: {
        type: String,
        required:false,
    },
    childUsername: {
        type: String,
        required: true,
    },
    childAge: {
        type: Number,
        required: true,
    },
    governorat: {
        type: String,
        required: true,
    },
    confirmedAge: {
        type: Boolean,
        required: true,
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('parentPassword')) {
        user.parentPassword = await bcrypt.hash(user.parentPassword, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;