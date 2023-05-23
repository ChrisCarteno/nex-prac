import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('useFindAndModify', false);

    if(isConnected) {
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    isConnected = true;
    console.log("Connected to MongoDB");
    }catch (error) {
        console.log(error);
    }
}