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

const displayCRUD = async (req, res) => {
  const data = await CRUDservice.getAllUser();
  console.log(data);
  return res.render("displayCRUD.ejs", {
    data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD,
  displayCRUD,
};
