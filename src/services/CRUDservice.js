const bcrypt = require("bcryptjs");
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  const password = await hashUserPassword(data.password);
  data = { ...data, password };
  try {
    const user = await db.User.create({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      gender: data.gender === "1" ? true : false,
      image: data.image,
      roleId: data.roleId,
    });
    console.log("create new user successful");
    console.log(user.toJSON());
  } catch (error) {
    // throw new Error("something wrong...");
  }
};

const hashUserPassword = async (password) => {
  try {
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  } catch (err) {
    throw new Error("something fail... !");
  }
};

const getAllUser = async () => {
  try {
    const users = await db.User.findAll({
      raw: true,
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createNewUser,
  getAllUser,
};
