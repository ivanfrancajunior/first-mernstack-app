const mongoose = require("mongoose");
const userService = require("../services/user.services");

const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }
  } catch (error) {
    res.status(500).send({ message: err.message });
  }

  next();
};

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
  req.id = id;
  req.user = user;
  next();
};

module.exports = { validId, validUser };
