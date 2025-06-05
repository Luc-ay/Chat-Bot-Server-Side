import express, { json } from 'express';
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cookieParser())

app.use('/auth', authRoute)

const PORT = process.env.PORT || 5050

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
    
})