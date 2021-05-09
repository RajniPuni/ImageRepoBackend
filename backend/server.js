const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

 dotenv.config();

const uri = process.env.MONGO_CONNECTIONSTRING;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("Database Connection Successful.");
});

app.use(cors());
app.use(express.json());

const saveImageRoutes = require('./saveImage');
app.use('/api/saveimage', saveImageRoutes);

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT || 4000, () => {
    console.log('Auth-Server Running on port : ', process.env.PORT || 4000);
})