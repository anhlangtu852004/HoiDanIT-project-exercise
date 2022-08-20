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

const getEditCRUD = async (req, res) => {
  if (req.query.id) {
    const user = await CRUDservice.getUserById(req.query.id);
    console.log(user);
    res.render("editCRUD.ejs", { user });
  } else {
    res.send("user not found");
  }
};

const putCRUD = async (req, res) => {
  const allUser = await CRUDservice.updateUserData(req.body, req.params.id);
  console.log(allUser);
  return res.render("displayCRUD.ejs", {
    data: allUser,
  });
};

const deleteCRUD = async (req, res) => {
  // const user =
  await CRUDservice.deleteUserById(req.params.id);
  return res.send("xoa user thanh cong");
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD,
  displayCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
