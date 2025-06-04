import express from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/register', registerUser)
route.post('/login', loginUser)
route.post('/logout', logoutUser)

export default route;