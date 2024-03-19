require('dotenv').config();
const mongoose = require('mongoose');

const USERNAME = process.env.USERNAME_MONGO_DB;
const PASSWORD = process.env.PASSWORD_MONGO_DN;

mongoose.set("strictQuery", false);

mongoose
    .connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.geekwgj.mongodb.net/`
    )
    .then(() => console.log("Connected mongo db"))
    .catch((e) => console.log(e));

