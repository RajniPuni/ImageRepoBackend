# ImageRepoBackend

This is the backend code having APIs to get all the images and to save the image in the mongo DB. Image is physically saved in the uploads folder
This code is written in node.js.

Please find the video "ProjectWorkingAndCodeDescription.mp4" on the root to see the working of the project. As there is a connection to MongoDB I cant share mongo DB details. However I have shared screenshot "mongodb" of how the data looks like in mongo db.


To run this applicatio locally, type npm start in the terminal. Make sure the port number is 4000 because I am calling this api in the frontend part. If the port number is different make sure to change it in this file: 
https://github.com/RajniPuni/ImageRepoFrontend/blob/main/src/UploadImage.jsx
Line number: 51, 79, 109,110
