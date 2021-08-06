import jwt from "jsonwebtoken";
import { Account } from "../models/account";

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;

    next();
  });
};

const isUser = (req, res, next) => {
  Account.findByPk(req.accountId).then((account) => {
    return account;
  });
};

export { verifyToken, isUser };
