// rename to Blog.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}  //change to class Blog extends Model {}
// movie model to create the movies displayed once clicked
Movie.init(  //change to Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    // release_date: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // runtime: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // imageURL: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // genre: {
    //     type: DataTypes.STRING
    // },
    // outOfTen: {
    //     type: DataTypes.DECIMAL
    // },
    // directors: {
    //     type: DataTypes.STRING
    // },
    // writer: {
    //     type: DataTypes.STRING
    // },
    // stars: {
    //     type: DataTypes.TEXT
    // },
    // movieURL: {
    //     type: DataTypes.STRING,
    // },
    // previewURL: {
    //     type: DataTypes.STRING,
    // },
    // movieSummary: {
    //     type: DataTypes.TEXT,
    // }


    },

  {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Movie;  //change to module.exports = Blog;
