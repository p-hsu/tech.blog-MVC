// data to create, update, delete posts
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../util/auth');

//creating new post 
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update post
router.put('/:id', withAuth, async (req, res) => {
    // update a category by its `id` value
    try {
      const postData = await Post.update({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        updated: true
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        }
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No blog post to be found, please try again!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No blog post to be found, please try again!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
