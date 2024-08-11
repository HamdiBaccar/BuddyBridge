const express = require('express');
const bodyParser = require('body-parser');
const group_route = express();
const port = 3000;

group_route.use(bodyParser.json());
group_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

group_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/groupImages'), function (error, success) {
            if (error) {
                console.log(error)
            }
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error)
            }
        });
    }
});

const upload = multer({ storage: storage });

const groupController = require('../controllers/groupController');

group_route.post('/create-group', upload.single('GroupImage'), groupController.createGroup);

group_route.get('/get-groups', groupController.getGroups);

group_route.get('/get-group/:id', groupController.getGroupById);

group_route.get('/delete-group/:id', groupController.deleteGroup);

group_route.post('/update-group/:id', upload.single('GroupImage'), groupController.updateGroup);

module.exports = group_route;

