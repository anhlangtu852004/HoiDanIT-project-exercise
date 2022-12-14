import express from "express";
// import "dotenv/config";
require("dotenv").config();

import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "../src/route/web.js";
import connectDB from "./config/connectDB";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config app
configViewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`backend started on port ${port} .....!`);
});
