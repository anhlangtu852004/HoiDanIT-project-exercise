import express from "express";
import homeController from "../controllers/homeControllers.js";

const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.put("/put-crud/:id", homeController.putCRUD);
  router.delete("/delete-crud/:id", homeController.deleteCRUD);

  return app.use("/", router);
};
export default initWebRoutes;
