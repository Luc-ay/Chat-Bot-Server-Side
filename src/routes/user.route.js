import express from 'express';
import { protectRoute } from './../middleware/auth.middleware.js';
import { logoutUser, userProfile } from '../controllers/user.controller.js';

const route = express.Router();

route.get('/profile', protectRoute, userProfile);
route.put('/update', protectRoute, updateProfile);
route.post('/logout', logoutUser)

