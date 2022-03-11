const mongoose = require('mongoose');

const connectDB = () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParse: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB Connected: ${conn}`);
    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

module.exports = connectDB;