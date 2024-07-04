// const users = [
//     {
//         id: 1,
//         name: 'Udara'
//     },
//     {
//         id:2,
//         name:'Madara'
//     }
// ];

// const getUsers = (cb) => {
//     cb(users);
// };

// const getUserByID = (id, cb)=> {
//     const user = users.find(user => user.id == id);
//     cb(user);
// };

//routes = controller
const User = require('./Models/model');


const getUsers = (req, res, next) => {
    User.find()
       .then(response => {
            res.json({ response })
       })
       .catch(error => {
        res.json({ message : error })
       });
};

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({ response })
       })
       .catch(error => {
        res.json({ message : error })
       });
};

const updateUser = (req, res, next) => {
    const { id, name } = req.body;
    User.updateOne({ id: id }, { $set: { name: name }})
        .then(response => {
            res.json({ response })
       })
       .catch(error => {
        res.json({ error })
       });
};

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id : id })
        .then(response => {
            res.json({ response })
       })
       .catch(error => {
        res.json({ error })
       });
};

//exports.getUserByID = getUserByID;
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
