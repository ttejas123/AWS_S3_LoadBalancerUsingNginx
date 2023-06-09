const express = require('express');
const fs = require('fs');
const app = express();
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_PUBLIC_KEY,
  secretAccessKey: process.env.AWS_SECRATE_KEY
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const bucketParams = {
  Bucket: 'savefiletobucketswithsaurabh'
};

const port = process.argv[3] ? process.argv[3] : 8000 

app.use(express.json());

app.get("/createBucket", async(req, res)=> {
  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({msg: "Successfull"})
    }
  });
})

app.get("/postImage", async(req, res) => {
    const path = './Public/official.jpeg'

    fs.readFile(path, (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          // const base64EncodedBuffer = data.toString('base64');
          const params = {
              Bucket: bucketParams.Bucket,
              Key: "Saurabh",
              Body: data
          };
          s3.upload(params, (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).send('Error uploading file');
            }
        
            res.status(200).json({
              port,
              msg: "Uploaded on AWS",
              data: data,
            });
          });
        }
    });
})

app.get('/fetchMyImage', (req, res) => {
  const params = {
    Bucket: bucketParams.Bucket,
    Key: "Saurabh",
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving image from S3');
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data.Body);
    }
  });
});

app.listen(port, ()=> {
    console.log("Listing to port "+port);
})