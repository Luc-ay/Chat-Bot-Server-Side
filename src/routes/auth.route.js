import express from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/auth.controller';

const route = express.Router();

route.get('/register', registerUser)
route.get('/login', loginUser)
route.get('/logout', logoutUser)

export default route;