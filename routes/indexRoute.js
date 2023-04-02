import express from "express";
import { getUsers, Signup, Signin, Logout } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users',verifyToken, getUsers);
router.post('/signup', Signup);
router.post('/signin', Signin);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;