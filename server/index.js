const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use('/auth' , authRouter);


const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://NikitaFrontend:NikitaSin0211@atlascluster.lyram4z.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log('Working');
        });
    }


    catch (error) {
        console.log(error);
    }
};

start();
