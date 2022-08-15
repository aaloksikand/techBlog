const sequelize = require('../config/connection');

const { Blog } = require('../models');
const { User } = require('../models');
const { Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

// Use the data from seeds file and send it with the format we setup in models folder
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const blogs = await Blog.bulkCreate(blogData);
  const users = await User.bulkCreate(userData);
  const Comments = await Comment.bulkCreate(commentData);
  

  process.exit(0);
};

seedDatabase();

