const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
// a user can post many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// a user can post many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id'
});
// a blog can have many Comments
Blog.hasMany(Comment, {  
    foreignKey: 'blog_id'  
})
// a Comment belongs to one blog
Comment.belongsTo(Blog, { 
  foreignKey: 'blog_id',  
});
// a Comment belongs to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})
Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blog, Comment };

