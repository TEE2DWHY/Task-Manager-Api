const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const NotFound = require("./middle-ware/NotFound");
const errorHandler = require("./middle-ware/errorHandler");
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1", tasks);
app.use(NotFound);
app.use(errorHandler);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
