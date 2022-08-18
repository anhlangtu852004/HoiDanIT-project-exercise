import db from "../models/index";

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

module.exports = {
  getHomePage: getHomePage,
};
