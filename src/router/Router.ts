import express from "express";
import { getUserLogin, postUserLogin } from "../contrllor/log";
import { getUserrigeste, postUserrigester } from "../contrllor/register";
import { authorized, protect } from "../Middlwear/protect";
import vaidation from "../Middlwear/Valdation";
import{UserLogin , Userregister } from '../zod/user'

const router = express.Router();

router.post('/log', vaidation(UserLogin), postUserLogin)
router.post('/register' ,vaidation(Userregister), postUserrigester)

router.get('/register' ,getUserrigeste)
router.post('/log',    getUserLogin)


router.get('/admin',protect,authorized('admin'));
router.get('/user',protect,authorized('User' ));

export default router
