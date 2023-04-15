const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRouter');
const categorieRouter = require('./router/categoriesRouter');
const cors = require('cors');
const cashRouter = require('./router/cashFlowRouter');
const midlewareErr = require('./midlewares/midlewareErr');


const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/cash', cashRouter);
app.use('/auth' , authRouter);
app.use('/categories', categorieRouter);
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
