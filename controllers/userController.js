const user = require("../dbControllers/user");
const userController = {};

userController.getUser = function (req, res) {
  user.getUser(
    {
      email: "rvindkalbhor@gmail.com",
      password: "12",
    },
    (err, data) => {
      if (err) {
        res.send({ status: false, error: "login failed", err: err });
      } else {
        res.send({ status: true, msg: "login sucess", data: data });
      }
    }
  );
};

userController.createUser = function (req, res) {
  user.createUser(req.body, (err, data) => {
    if (err) {
      res.send({ status: false, error: "User not created", err: err });
    } else {
      res.send({ status: true, msg: "User created" });
    }
  });
};
userController.updateUser = function () {};

userController.deleteUser = function () {};

module.exports = userController;
