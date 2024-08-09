const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Stripe = require('stripe');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {
            CIN, parentName,parentEmail, parentPassword, phoneNumber,
            address,childUsername, childAge,
            governorat, confirmedAge
        } = req.body;

        if (!confirmedAge) {
            return res.status(400).send('Age confirmation is required');
        }

        const user = new User({
            CIN, parentName, parentEmail, parentPassword, phoneNumber,
            address, childUsername, childAge,
            governorat, confirmedAge
        });
        await user.save();

        res.status(201).send({userId: user._id });
    } catch (err) {
        res.status(400).send(err.message);
    }
});


router.post('/signin', async (req, res) => {
    try {
        const { childUsername, parentPassword } = req.body;

        const user = await User.findOne({ childUsername });
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }

        const isMatch = await bcrypt.compare(parentPassword, user.parentPassword);
        if (!isMatch) {
            return res.status(400).send('Invalid username or password');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ token });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;