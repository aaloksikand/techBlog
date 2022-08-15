const sequelize = require('../config/connection');

const { Movie } = require('../models');
const { User } = require('../models');
const { Review } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const reviewData = require('./reviewData.json');

// Use the data from seeds file and send it with the format we setup in models folder
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const movies = await Movie.bulkCreate(movieData);
  const users = await User.bulkCreate(userData);
  const reviews = await Review.bulkCreate(reviewData);
  

  process.exit(0);
};

seedDatabase();

