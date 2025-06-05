const express = require('express')
const serverless = require("serverless-http")

const app = express();
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Server is running")
})


app.use("/.netlify/functions/index", router);


module.exports.handler = serverless(app);
