import express from "express";

const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello anh em");
  });
  return app.use("/", router);
};
export default initWebRoutes;
