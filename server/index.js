const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRouter');
const cashRouter = require('./router/cashFlowRouter');
const cors = require('cors');
const midlewareErr = require('./midlewares/midlewareErr');


const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/cash', cashRouter);
app.use('/auth' , authRouter);
app.use(midlewareErr);


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
