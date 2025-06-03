import express, { json } from 'express';
import authRoute from './routes/auth.route.js'
import dotenv from 'dotenv'
import morgan from 'morgan';

const app = express();

dotenv.config();
app.use(json())
app.use(morgan("dev"));

app.use('/auth', authRoute)

const PORT = 5000

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
    
})