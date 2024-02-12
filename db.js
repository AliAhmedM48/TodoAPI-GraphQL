require("dotenv").config();
const mongoose = require("mongoose")


const URI_MONGO_ATLAS = process.env.MONGO_URL;

const connectDB = () => {
    mongoose.connect(URI_MONGO_ATLAS, { dbName: "ToDoQL" }).then(() => {
        console.log("connected to DB successfully");
    }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = connectDB