const User = require('./User');
const Blog = require('./Blog');  //change to const Blog = require ('./Blog');
const Comment = require('./Comment');  //change to const Comment = require ('./Comment');
// a user can post many blogs
User.hasMany(Comment, {  //change to User.hasMany (Blog, {
    foreignKey: 'user_id'
});
// a blog can have many Comments
Blog.hasMany(Comment, {  //change to Blog.hasMany(Comment, {
    foreignKey: 'blog_id'  //change to foreignKey: 'blog_id'
})
// a Comment belongs to one blog
Comment.belongsTo(Blog, { //change to Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',  //change to 'blog_id'
});
// a Comment belongs to one user
Comment.belongsTo(User, {  //change to Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blog, Comment };  //change to module.exports = { User, Blog, Comment };

