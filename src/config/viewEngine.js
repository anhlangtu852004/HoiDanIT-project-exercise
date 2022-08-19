import express from "express";
const methodOverride = require("method-override");

let configViewEngine = (app) => {
  app.use(express.static("./public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
  app.use(methodOverride("_method"));
};

export default configViewEngine;
