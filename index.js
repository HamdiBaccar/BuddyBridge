const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/FrienzoneApp");


app.get('/', (req, res) => {
    res.send('test');
  });



const group_route = require('./routes/groupRoute');  
app.use('/api', group_route);

app.listen(port, () => {
    console.log(`Serveur exécuté sur le port ${port}`);
  });