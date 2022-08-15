//rename to Comment.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}  //rename to Comment.js
// review model to create the reviews made by users
Review.init(  //rename to Comment
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // rating: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          }
    },
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'movie', //change to 'blog'
            key: 'id',
          }
    },


    },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'review',  //change to 'comment'
  }
);

module.exports = Review;  //change to Comment
