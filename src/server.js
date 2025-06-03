import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';

const app = express();

dotenv.config();

app.use(morgan("dev"));

app.use

const PORT = 5000

app.listen(PORT =>{
    console.log(`Server running on port ${PORT}`);
    
})