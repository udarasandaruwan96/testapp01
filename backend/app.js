const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

//middlewares
app.use(cors()); //unblock the resource sharing
app.use(express.urlencoded({ extended: true })); // used for encored the all request data
app.use(express.json());//used for convert data to json object

//rest api
// app.get('/users', (req, res) =>{
//     controller.getUsers(users =>{
//         res.send(users);
//     });
// });

// app.get('/user', (req, res) =>{
//     const id = req.query.id;
//     controller.getUserByID(id, user =>{
//         res.send(user);
//     });
// });

app.get('/users', (req, res) =>{
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

app.post('/addUser', (req, res) =>{
    controller.addUser(req.body, (callack) => {
        res.send();
    });
});

app.put('/updateUser', (req, res) =>{
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.delete('/deleteUser', (req, res) =>{
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});



module.exports = app;

