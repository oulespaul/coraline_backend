import { Account } from "../models/account";

const checkDuplicateUsername = (req, res, next) => {
  Account.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).send({
        message: "Username is already in use!",
      });
    }

    next();
  });
};

export { checkDuplicateUsername };
