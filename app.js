const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/Task");
const connectToDB = require("./db/Connect");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const port = process.env.PORT || 5000;

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", routes);
app.use(notFound);
app.use(errorHandlerMiddleware);

//starting the application
const start = async () => {
  try {
    //connecting  to db
    const result = await connectToDB(process.env.MONGO_URI);
    if (result) {
      //starting the server only after connection to db.
      app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
      });
    }
  } catch (error) {
    console.log(`Error connecting database: ${error.message}`);
  }
};

start();
