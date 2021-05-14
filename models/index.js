// import models
const User = require('./Users');
const Post = require('./postModel');
const Comment = require('./commentModel');

// each Post belongsTo one User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// Users have many Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// each User have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// each Comment belongsTo one User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = {
  User,
  Post,
  Comment
};
