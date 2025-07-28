import express from "express";
import cors from "cors";
// import "dotenv/config";

import dotenv from 'dotenv';
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRouter.js";


dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server Started on PORT : " + port));
