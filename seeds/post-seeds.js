const { Post } = require('../models');

const postData = [
  {
    post_title: 'Love at first byte: Burger of the Day',
    post_content: 'What do you get if you cross a computer and a burger? The big mac butter beet the full stack in this competition... ',
    user_id: 1
  },
  {
    post_title: 'Mole Hunt',
    post_content: 'All expense paid for - ahem - I mean no expences paid at all because this company values no one but mother\'s alcohol cabinet. The ISIS Mainframe will show excellent record of my use - or lack of use - of my operational account.',
    user_id: 2
  },
  {
    post_title: 'Spelvn\'s Pirate Virus',
    post_content: 'What a JOKE - there was NO WAY Cyril could have shot that server intentionally. I mean...seriously. Like - less than one in a million.',
    user_id: 2
  },
  {
    post_title: '40 min 16 sec in',
    post_content: 'Cruel Intentions - Career Opportunities - A Beautiful Mind - Broken Lizard\'s Club Dread - Cocktail ... wait - I thought this was a film blog...',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;