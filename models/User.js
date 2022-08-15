const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
// password check with bcrypt
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// user model to create a new user on signup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    profileUrl: {
      type: DataTypes.STRING,

      defaultValue:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fgettyimages-81692747-2000.jpg&q=60",
    },
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        try {
          newUser.password = await bcrypt.hash(newUser.password, 10);
          return newUser;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedUser) => {
        try {
          updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
          return updatedUser;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
