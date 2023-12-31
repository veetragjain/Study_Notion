import mongoose from "mongoose";
import "dotenv/config";

const DB_URL = process.env.DATABASE_URL;

const dbconnection = () => {

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("successfully connected to db"))
        .catch((err) => {
            console.log("issue with db connection");
            console.log(err);
        })
}

export default dbconnection;