//const app = require('./app');

const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./Routes/router');

//middlewares
app.use(cors()); //unblock the resource sharing
app.use(express.urlencoded({ extended: true })); // used for encored the all request data
app.use(express.json());//used for convert data to json object

const uri = 'mongodb+srv://testapp_01:testapp_01@testapp01.p1sgfvd.mongodb.net/?retryWrites=true&w=majority&appName=testapp01';

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('connected to MongoDB!');
    }
    catch{
        console.log('Fail to connected to MongoDB!', error);
    }
}
connect();


const server = app.listen( port, host, () =>{
    console.log(`Node Server is listening to ${server.address().port}`)
});

app.use('/api', router);
