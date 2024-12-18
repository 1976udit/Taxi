import mongoose from 'mongoose'

function connectDB(){
    mongoose.connect(process.env.DB_KEY)
    .then( () => {
        console.log('Connect to DB');
    })
    .catch(err => console.log(err))
}

export default connectDB;

// DB_KEY = mongodb://0.0.0.0/uber