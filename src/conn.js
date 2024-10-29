import mongoose from "mongoose";

(async () => {
    try {
        mongoose.connect(process.env.MONGODB);
        console.log("Connected with DB");
    } catch (err) {
        console.log(err);
    }
})