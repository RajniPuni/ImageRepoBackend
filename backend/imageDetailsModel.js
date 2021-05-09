const mongoose = require('mongoose');

const imageDetailsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        max: 100
    },
    imageLocation: {
        type: String,
        required: true,
        max: 100
    },
    imageName: {
        type: String,
        required: true,
        max: 100
    },
    imageDesc:{
        type: String,
        required: true,
        max: 200
    },
    datecreated: {
        type: String
    }
});

const ImageDetails = mongoose.model('imagedetails', imageDetailsSchema);

module.exports = ImageDetails;