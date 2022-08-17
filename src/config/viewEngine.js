import express from "express";

let configViewEngine = (app) => {
  console.log("zo config");
  app.use(express.static("./public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
