import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type : String,
            required : true,
            minLength : [3, 'Please enter at least 3 characters']
        },
        lastName : {
            type : String,
            minLength : [3, 'Please enter at least 3 characters']
        }
    },
    email : {
        type : String,
        required : true,
        minLength : [5 , "E-mail contains at least 5 characters"],
        unique : true
    },
    password : {
        type : String,
        required : true,
        select : false,
    },
    socketId : {
        type : String,
        required : true
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function() {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user', userSchema);

export default userModel;