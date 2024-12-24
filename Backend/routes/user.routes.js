import express from 'express'
import {body} from 'express-validator'
import registerUser from '../controllers/user.controller.js';
const router = express.Router();

router.post('/register' , [
    body('email').isEmail().withMessage("Invalid E-mail"),
    body('fullName.firstName').isLength({min : 3}).withMessage('FirstName requires at least 3 characters'),
    body('password').isLength({min : 5}).withMessage('Password requires at least 5 characters')
],
 registerUser
)


export default router;


