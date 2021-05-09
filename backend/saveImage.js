const router = require('express').Router();
const multer  = require('multer');
const ImageDetails = require('./imageDetailsModel')

// Multer is used to store uploaded images in uploads folder.
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'./uploads/');
    },
    filename: function(req, file, cb) {
        const str = Math.floor(Math.random()*10000);
        console.log(str)
        cb(null,str + file.originalname);
    },
});

// Validation: Only jpg and png image is allowed to upload
const filefilter = (req, file, cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
};
const upload = multer({storage: storage, filefilter:filefilter});

router.get('/:userId', async (req, res) => {
    const images = await ImageDetails.find({ userId: req.params.userId }).sort({_id: -1});
    return res.status(200).send(images);
});

router.post('/', upload.single('imagetoupload'), async (req, res) => {
    console.log('image saved....');
    try {
        const images = new ImageDetails({
            userId: req.body.userId,
            imageLocation: req.file.path,
            imageName: req.file.filename,
            imageDesc: req.body.imagedesc,
            datecreated: new Date()
        });
        const savedimage = await images.save();
        return res.send({ photo: savedimage._id });
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


module.exports = router;