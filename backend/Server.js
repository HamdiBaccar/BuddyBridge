require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const FriendSuggRoutes = require('./routes/FriendSuggestion');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api',FriendSuggRoutes);

mongoose.connect('mongodb://localhost:27017/auth-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
