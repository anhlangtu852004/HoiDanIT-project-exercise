import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    data = JSON.stringify(data);
    console.log(data);
    return res.render("homepage.ejs", {
      data: data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

const getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

const postCRUD = (req, res) => {
  CRUDservice.createNewUser(req.body);
  return res.send("tao user thanh cong");
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD,
};
