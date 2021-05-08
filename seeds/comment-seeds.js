const { Comment } = require('../models');

const commentData = [
  {
    comment_content: 'Butter beet the double stack! Ahahah ... good one. But I bet the full stack would fry the competition.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_content: 'This will never make it into production.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'This sounds like a great movie plot-line...',
    user_id: 3,
    post_id: 2
  },
  {
    comment_content: 'You know - I bet Warren is a better shot than Cyril.',
    user_id: 4,
    post_id: 3
  },
  {
    comment_content: 'Gator - Operation CIA - Predator - Top Gun',
    user_id: 1,
    post_id: 4

  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;