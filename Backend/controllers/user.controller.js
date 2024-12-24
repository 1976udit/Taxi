import userModel from '../models/user.models.js'
import {ValizationResult} from "express-validator"

async function registerUser(req,res,next) {
   const error = ValizationResult.
}

export default registerUser;