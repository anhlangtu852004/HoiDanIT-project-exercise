import express from "express";
import "dotenv/config";

import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "../src/route/web.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config app
configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`backend started on port ${port} .....!`);
});
