import express from "express";
import dotenv from "dotenv";
import LoginRoutes from "./routes/authorization_authentication/LoginRoutes";
// import SignUpRoutes from "./routes/Authorization_Authentication/SignUpRoutes";

const app = express();
dotenv.config();
/* <------------------MiddleWares--------------------> */

/* <------------------Routes------------------------->  */
// app.use("/login", LoginRoutes);
// app.use("/signup", SignUpRoutes);

/* <-------------------Connection Established-------------->  */
console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log("Connection Settled on Port:-", process.env.PORT);
});
