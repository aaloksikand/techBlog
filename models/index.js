const User = require('./User');
const Movie = require('./Movie');  //change to const Blog = require ('./Blog');
const Review = require('./Review');  //change to const Comment = require ('./Comment');
// a user can post many blogs
User.hasMany(Review, {  //change to User.hasMany (Blog, {
    foreignKey: 'user_id'
});
// a movie can have many reviews
Movie.hasMany(Review, {  //change to Blog.hasMany(Comment, {
    foreignKey: 'movie_id'  //change to foreignKey: 'blog_id'
})
// a review belongs to one movie
Review.belongsTo(Movie, { //change to Comment.belongsTo(Blog, {
  foreignKey: 'movie_id',  //change to 'blog_id'
});
// a review belongs to one user
Review.belongsTo(User, {  //change to Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Movie, Review };  //change to module.exports = { User, Blog, Comment };

