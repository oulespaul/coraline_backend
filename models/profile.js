import { Model, DataTypes } from "sequelize";
import { sequelize } from "../models";

export class Profile extends Model {
  id;
  firstName;
  lastName;
  birthday;
  phone;
  email;
  profileImage;
  educations;
  accountId;
}

Profile.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: { type: DataTypes.STRING, allowNull: true },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    educations: { type: DataTypes.JSON, allowNull: true },
    accountId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    tableName: "profiles",
    modelName: "Profile",
    freezeTableName: true,
  }
);
