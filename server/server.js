const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
//Import Routes
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

dotenv.config();

const PORT = 5000;

//connect to DB
// uri - "mongodb+srv://anurag:anuraganurag@cluster0.ofl6t.mongodb.net/splitwiseAppClone?retryWrites=true&w=majority"
mongoose
  .connect(process.env.DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB not connected"));

//Middleware
app.use(express.json());
app.use(cors());

//Routes Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
