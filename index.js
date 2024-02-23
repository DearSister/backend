import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import LoginRoutes from "./routes/authorization_authentication/LoginRoutes.js";
import bodyParser from "body-parser";
import SignUpRoutes from "./routes/authorization_authentication/SignUpRoutes.js";
import cors from "cors";
const app = express();

dotenv.config();
/* <------------------MiddleWares--------------------> */
app.use(bodyParser.json());
app.use(cors());
/* <------------------Routes------------------------->  */
app.use("/login", LoginRoutes);
app.use("/signup", SignUpRoutes);

/* <-------------------Connection Established And MongoDb Connection-------------->  */
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to Mongodb ");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("Connection Settled on Port:-", process.env.PORT);
});
