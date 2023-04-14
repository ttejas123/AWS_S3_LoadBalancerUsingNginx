const express = require('express');
const fs = require('fs');
const app = express();

// app.use(express.static('public'))

const port = process.argv[3] ? process.argv[3] : 8000 

app.use(express.json());

app.get("/", async(req, res) => {
    const path = './Public/official.jpeg'

    fs.readFile(path, (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          const base64EncodedBuffer = data.toString('base64');
          res.status(200).json({
            port,
            msg: "Connect With AWS Bucket",
            dataBuff: data,
            string: base64EncodedBuffer
          });
        }
    });
})

app.listen(port, ()=> {
    console.log("Listing to port "+port);
})