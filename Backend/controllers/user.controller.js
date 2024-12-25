import userModel from '../models/user.models.js'
import {ValidationResult} from "express-validator"
import createUser from '../services/user.service.js'

async function registerUser(req,res,next) {
   const errors = ValidationResult(req)
   if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()})
   }

   const {firstName, lastName, email, password} = req.body;
   const hashedPassword = await userModel.hashPassword(password);

   const user = await createUser({
      firstName,
      lastName,
      email,
      password : hashedPassword
   })
}

export default registerUser;