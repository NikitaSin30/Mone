const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRouter = require('./router/authRouter');
const categorieRouter = require('./router/categoriesRouter');
const cashRouter = require('./router/cashFlowRouter');
const tasksRouter = require('./router/tasksRouter');
const middlewareErr = require('./middlewares/middlewareErr');
const ApiError = require('./apiError/ApiError');

const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/cash', cashRouter);
app.use('/auth' , authRouter);
app.use('/categories', categorieRouter);
app.use('/tasks',tasksRouter);
app.use('*',(req,res) =>{
    throw ApiError.createBadRequestError('пиздец');
});
app.use(middlewareErr);



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
