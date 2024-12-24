import userModel from "../models/user.models.js";

const createUser = async ({firstName,lastName,email,password}) => {
   if(!firstName || !email || !password){
    throw new Error("Please enter all fields!")
   }
   const user = userModel.createUser({
      fullName : {
        firstName,
        lastName
      },
      email,
      password
   })
   return user;
}

export default createUser;