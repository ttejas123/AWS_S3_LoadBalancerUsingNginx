const express = require('express');

const app = express();

const port = process.argv[3] ? process.argv[3] : 8000 

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        port,
        msg: "We are live"
    })
})

app.listen(port, ()=> {
    console.log("Listing to port "+port);
})