const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect('mongodb+srv://nhatb2012122:Nhathao123@cluster0.8edhgzd.mongodb.net/e-commerce');

app.get("/",(req,res)=>{
    res.sendFile("Express App is Running")
})
app.listen(port,()=>{
    if (!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log("Error: " + error);
    }
})