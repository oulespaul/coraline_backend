import { Model, DataTypes } from "sequelize";
import { sequelize } from "../models";

export class Account extends Model {
  username;
  password;
}

Account.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "accounts",
    modelName: "Account",
    freezeTableName: true,
  }
);
